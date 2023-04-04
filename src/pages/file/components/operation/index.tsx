import React, { useState, useRef, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { history, useLocation } from "umi";
import { Input, Collapse, message, Upload, Modal, Button, Row, Col, Tag } from "antd";
import type { RcFile } from "antd/es/upload";
import PubSub from "pubsub-js";
import html2canvas from "html2canvas";
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { TagInput } from '@douyinfe/semi-ui';

import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';
import SketchBoard from "../sketchBoard";
import "./index.less";

const { Panel } = Collapse;
const { TextArea } = Input;
const { Dragger } = Upload;

// 获取图片的base64码
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const index = () => {
  const location: any = useLocation();
  const [projectId, setProjectId] = useState(0);
  const [projectName, setProjectName] = useState("");

  const [editMode, setEditMode] = useState("start");  // 记录当前状态，是否已经进入编辑
  const [img, setImg] = useState("");  // 画布当前显示的图片
  const [tmpImg, setTmpImg] = useState("");  // 编辑图片对话框中显示的图片
  const [isModalOpen, setIsModalOpen] = useState(false);  // 是否显示编辑图片对话框
  const [scaleRatio, setScaleRatio] = useState(1);  // 根据鼠标滚轮的缩放比例
  const [hasCropped, setHasCropped] = useState(false);  // 当前图片是否被裁剪过

  const [txtValue, setTxtValue] = useState("");  // 用户输入的文本关键词
  const [tags, setTags] = useState(Array<string>);  // 从左侧资源选择的标签

  const previewCanvasRef = useRef<HTMLCanvasElement>(null)  // 裁剪结果的ref
  const imgRef = useRef<HTMLImageElement>(null)  // 裁剪图像的ref
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
  const blobUrlRef = useRef('')
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()

  useEffect(() => {
    const pName = window.location.search.slice(1).split('?')[0].split('=')[1];
    const pId = parseInt(window.location.search.slice(1).split('?')[1].split('=')[1]);
    setProjectId(pId);
    setProjectName(pName);
    if (location) {
      if (location.state) {
        setEditMode("edit");
        setImg(location.state.img);
        setTmpImg(location.state.img);
        const img = new Image();
        img.src = location.state.img;
        img.onload = function () {
          PubSub.publish("beginEdit", [400, Math.round(img.height / img.width * 400)]);
        };
      }
    }
  }, []);

  PubSub.unsubscribe("addTag");  // 获取到selection栏的点击事件，并且设置tags
  PubSub.subscribe("addTag", (functionName, args) => {
    tags.push(args);
  })

  const handleZoom = (e: any) => {  // 鼠标滚轮控制画布和图片的同步缩放
    if (e.deltaY < -10) {
      PubSub.publish("zoom", 5/4);
      setScaleRatio(scaleRatio*5/4);
    }
    else if (e.deltaY > 10) {
      PubSub.publish("zoom", 4/5);
      setScaleRatio(scaleRatio*4/5);
    }
  }
  
  const showModal = () => {  // 编辑图片对话框
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    if (tmpImg !== "") {
      onDownloadCropClick();  // 裁剪并设置图片
    }
    else {
      setImg("");
    }
    setEditMode("edit");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const deleteImg = () => {  // 删除图片
    setTmpImg("");
  }

  PubSub.unsubscribe("changeGenerationMode");  // header点击控制对话框的打开
  PubSub.subscribe("changeGenerationMode", (functionName, arg) => {
    if (editMode === "start") {
      setEditMode("edit");
      const im = new Image();
      im.src = img;
      im.onload = function () {
        PubSub.publish("beginEdit", [400, Math.round(im.height / im.width * 400)]);
      };
    }
    else if (editMode === "edit") {
      setEditMode("start");
    }
  });

  PubSub.unsubscribe("changeToEditImgMode");  // header点击控制对话框的打开
  PubSub.subscribe("changeToEditImgMode", (functionName, arg) => {
    if (!isModalOpen) {showModal();}
    else {handleCancel();}
    setIsModalOpen(!isModalOpen);
  });
  PubSub.unsubscribe("goResult");  // 转到生成页面，并传递图片和文本参数
  PubSub.subscribe("goResult", (functionName, arg) => {
    var element: any = document.querySelector(".container");
    if (!element) {
      history.push({ pathname: `/result?name=${projectName}?id=${projectId}`}, {img: "", txt: txtValue, tags: tags});
    }
    else {
      html2canvas(element).then((canvas) => {
        var data = canvas.toDataURL("image/jpeg");
        history.push({ pathname: `/result?name=${projectName}?id=${projectId}`}, {img: data, txt: txtValue, tags: tags});
      });
    }
  });

  const onChange = async (info: any) => {  // 在一开始的界面上传文件后
    const { status } = info.file;
    if (status === "done") {
      info.file.preview = await getBase64(info.file.originFileObj as RcFile);
      setImg(info.file.preview as string);
      setTmpImg(info.file.preview as string);
      setEditMode("edit");
      const img = new Image();
      img.src = info.file.preview;
      img.onload = function () {
        PubSub.publish("beginEdit", [400, Math.round(img.height / img.width * 400)]);
      };
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  };
  const onImgChange = async (info: any) => {  // 在编辑图片对话框上传图片后
    const { status } = info.file;
    if (status === "done") {
      info.file.preview = await getBase64(info.file.originFileObj as RcFile);
      setTmpImg(info.file.preview as string);  // 只改变对话框里的图片
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  };
  const beforeUpload = async (file: any) => {  // 上传前判断文件类型是否合法
    const isPNG = file.type === "image/png";
    const isJPEG = file.type === "image/jpeg";
    if (!(isPNG || isJPEG)) {
      message.error(`${file.name} 不是 png/jpg/jpeg 文件`);
    }
    return isPNG || isJPEG || Upload.LIST_IGNORE;
  };

  function centerAspectCrop(  // 居中裁剪方法
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 100,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
  }

  useDebounceEffect(  // 每裁剪一次，保存裁剪结果
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          1,
          0,
        )
      }
    },
    100,
    [completedCrop, 1, 0],
  )

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {  // 保证图片打开时处于全部选中的状态
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, width/height));
    setHasCropped(false);
  }

  function onDownloadCropClick() {  // 保存裁剪结果，设置为当前图片，并修改画布尺寸
    if (hasCropped) {
      if (!previewCanvasRef.current) {
        throw new Error('Crop canvas does not exist');
      }
      previewCanvasRef.current.toBlob((blob) => {
        if (!blob) {
          throw new Error('Failed to create blob');
        }
        if (blobUrlRef.current) {
          URL.revokeObjectURL(blobUrlRef.current);
        }
        blobUrlRef.current = URL.createObjectURL(blob);
        hiddenAnchorRef.current!.href = blobUrlRef.current;
        const a = new FileReader();
        a.readAsDataURL(blob);
        a.onload = (e: any) => {
          const base64 = e.target.result;
          setImg(base64);
          const img = new Image();
          img.src = base64;
          img.onload = function () {
            PubSub.publish("beginEdit", [400, Math.round(img.height / img.width * 400)]);
          };
        }
      })
    }
    else {
      setImg(tmpImg);
      const img = new Image();
      img.src = tmpImg;
      img.onload = function () {
        PubSub.publish("beginEdit", [400, Math.round(img.height / img.width * 400)]);
      };
    }
  }

  return (
    <div className="operate_ctn">
      <Modal style={{fontFamily: 'PingFang'}}
      title="编辑图片" 
      open={isModalOpen} 
      onCancel={handleCancel}
      footer={[
      <div>
        <Row gutter={16} justify='space-between'>
          <Col span={5}>
            <Upload onChange={onImgChange} beforeUpload={beforeUpload} showUploadList={false}>
              <Button>{(img==="")?"上传图片":"更换图片"}</Button>
            </Upload>
          </Col>
          <Col span={5}><Button disabled={(tmpImg===""?true:false)} onClick={deleteImg}>删除图片</Button></Col>
          <Col offset={6} span={4}>
            <Button key="submit" type="primary" onClick={handleOk}>
              确认
            </Button>
            <a
            ref={hiddenAnchorRef}
            download
            style={{
              position: 'absolute',
              top: '-200vh',
              visibility: 'hidden',
            }}
            >Hidden download</a>
          </Col>
          <Col span={4}>
            <Button key="submit" onClick={handleCancel}>
              取消
            </Button>
          </Col>
        </Row>
      </div>]}>
        {(tmpImg!=="") && <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => {setCompletedCrop(c); setHasCropped(true);}}
          aspect={undefined}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={tmpImg}
            onLoad={onImageLoad}
          />
        </ReactCrop>}
        {!!completedCrop && (
          <>
            <div>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: '1px solid black',
                  objectFit: 'contain',
                  width: completedCrop.width,
                  height: completedCrop.height,
                  display: 'none',
                }}
              />
            </div>
          </>
        )}
      </Modal>
      {editMode === "start" && (
        <div className="start_ctn">
          <div className="upload_ctn">
            <Dragger
              beforeUpload={beforeUpload}
              onChange={onChange}
              multiple={false}
            >
              <UploadOutlined style={{fontSize: '24px', color: 'var(--dark-color)'}}/>
              <p style={{fontFamily: 'PingFang', fontSize: '16px', color: 'var(--dark-color)'}}>将文件拖到此处，或点击上传</p>
              <p style={{fontFamily: 'PingFang', fontSize: '12px', color: 'var(--dark-color)'}}>支持 png/jpg/jpeg 格式；大小不超过5M</p>
            </Dragger>
          </div>
          <button
            className="start_paint_btn"
            onClick={() => {setEditMode("edit");PubSub.publish("beginEdit", [400, 400]);}}
          >
            <p style={{fontFamily: 'PingFang', fontSize: '16px', color: 'var(--dark-color)'}}>直接开始绘画</p>
          </button>
        </div>
      )}
      {(editMode === "edit") && (
          <div className="container" id="container" onWheel={handleZoom}>
            <SketchBoard imgSrc={img} editMode={editMode} />
            <div className="target">
              <img className="img" width={400*scaleRatio} height={400*scaleRatio} src={(img==="")?undefined:img} />
            </div>
        </div>
      )}
      <div className="prompt_ctn">
        <Collapse collapsible="header" defaultActiveKey={["1"]} size="small">
          <Panel header="文字关键词" key="1">
            <TagInput 
              style={{ resize: 'none', fontFamily: 'PingFang', fontSize: '12px'}}
              showClear 
              allowDuplicates={false}
              value={tags} 
              onChange={v => {setTags(v);}}
              onInputChange={(input, e) => {setTxtValue(input);}}
              placeholder='product design of a handheld work light, soft lighting, redshift render, digital art, hyper-detailed, ultra-realistic, 8k post-production'
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default index;