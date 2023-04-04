import React, {useState, useEffect} from 'react'
import PubSub from "pubsub-js";
import { Slider, Tag } from 'antd';
import { history, useLocation} from 'umi';
import { SketchPicker } from "react-color";
import { Button, Popover, Modal, Input, Drawer, List, Card, Row, Col, Divider, Space, Upload, message, Tooltip } from 'antd';
import { HighlightOutlined, HighlightFilled, ToolOutlined, ToolFilled, ClockCircleOutlined, PictureOutlined, DownOutlined, StopOutlined } from '@ant-design/icons';
import type { RcFile } from "antd/es/upload";

import './index.less'
import setAuthToken from '@/utils/setAuthToken';
import { updateUserInfo, uploadImg, getDesignByProjectId, getMyProject } from '@/services/requestList';


// 获取图片的base64码
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Header = () => {
  let location = useLocation();
  const [isEdit, setIsEdit] = useState(false); // 是否已经从一开始的界面进入编辑
  const [editMode, setEditMode] = useState("start");  // 记录顶部工具栏选中的item
  const [colorPicker,setColorPicker] = useState(false);  // 是否显示取色板
  const [brushColor, setBrushColor] = useState("#000000");  // 中间图标显示的颜色
  const [eraserSize, setEraserSize] = useState(40);  // 橡皮大小
  const [brushSize, setBrushSize] = useState(10);  // 画笔大小
  const [lastPenColor, setLastPenColor] = useState("#000000");  // 保存画笔的颜色

  const [userEmail, setUserEmail] = useState("");  // 当用户是否登录；若是，显示个人信息，若否，显示登录按钮
  const [userName, setUserName] = useState("");  // 用户名
  const [userAvatar, setUserAvatar] = useState("");  // 用户头像
  const [tmpUserName, setTmpUserName] = useState("");  // 修改个人信息中保存的用户名
  const [tmpUserAvatar, setTmpUserAvatar] = useState("");  // 修改个人信息中保存的头像
  const [openDownInfo, setOpenDownInfo] = useState(false);  // 用户下拉框内容是否展示
  const [isModalOpen, setIsModalOpen] = useState(false);  // 修改个人信息对话框是否显示

  const [modelName, setModelName] = useState("stable diffusion v1.5");
  
  const [openHistory, setOpenHistory] = useState(false);  // 历史记录抽屉是否打开
  const [showProjects, setShowProjects] = useState(false);  // 历史记录栏是否展示所有项目 
  const [projectId, setProjectId] = useState(-1);  // 记录当前项目的id
  const [projectName, setProjectName] = useState("");  // 记录当前项目的名称
  const [designs, setDesigns] = useState<Array<{reference_image:string; 
    prompt:string; width:number; height:number; x_label:string; y_label:string;
    seed:string; denoising:string; cfg:string; steps:string}>>([]);
  const [projects, setProjects] = useState<Array<{id:number; name:string; image:string}>>([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);

    if (location.pathname === '/file' || location.pathname === '/result') {
      const pName = window.location.search.slice(1).split('?')[0].split('=')[1];
      const pId = parseInt(window.location.search.slice(1).split('?')[1].split('=')[1]);
      setProjectId(pId);
      setProjectName(pName);

      getData(pId);
    }
  }, []);

  const getData = async (pId: number) => {
    queryDesigns(pId);

    const prjs = await getMyProject();
    //console.log("projects: ", prjs);
    var tmpProjects = [];
    for (var i = 0; i < prjs.data.dataSize; i++) {
      tmpProjects.push({
        id: prjs.data.data[i].projectId,
        name: prjs.data.data[i].projectName,
        image: prjs.data.data[i].projectImg,
      });
    }
    setProjects(tmpProjects);
  }

  const queryDesigns = async(id: number) => {
    const res = await getDesignByProjectId(id);
    //console.log("new desigms: ", res);
    var tmpDesigns = [];
    for (var i = 0; i < res.data.dataSize; i++) {
      let args: JSON = JSON.parse(res.data.data[i].argument);
      const map = new Map(Object.entries(args));
      //console.log("map: ", map);
      tmpDesigns.push({
        reference_image: map.get('reference_image'),
        prompt: map.get('prompt'),
        width: map.get('width'),
        height: map.get('height'),
        seed: map.get('seed'),
        denoising: map.get('denoising_strength'),
        steps: map.get('steps'),
        cfg: map.get('cfg_scale'),
        x_label: map.get('x_label'),
        y_label: map.get('y_label')
      });
    }
    setDesigns(tmpDesigns);
  }

  const onProjectClick = async(item: any) => {
    queryDesigns(item.id);
    setShowProjects(false);
  }

  PubSub.subscribe("beginEdit", (functionName, arg) => {
    setIsEdit(true);
  });

  PubSub.unsubscribe("setUser");
  PubSub.subscribe("setUser", (functionName, arg) => {
    setUserEmail(arg.email);
    setUserName(arg.name);
    setUserAvatar(arg.avatar);
    setTmpUserAvatar(arg.avatar);
    setTmpUserName(arg.name);
  });

  PubSub.unsubscribe("setModel");
  PubSub.subscribe("setModel", (functionName, arg) => {
    setModelName(arg);
  });

  const logout = () => {  // 用户登出
    localStorage.setItem('token', "");
    setAuthToken(null);
    history.push('./login');
  }
  
  const hideDownInfo = () => {  // 控制下拉框内容的显示
    setOpenDownInfo(false);
  };
  const handleOpenDownInfo = (newOpen: boolean) => {
    setOpenDownInfo(newOpen);
  };
  const showModal = () => {  // 控制修改个人信息对话框
    setIsModalOpen(true);
    hideDownInfo();  // 显示修改个人信息对话框时，下拉框内容就隐藏了
  };
  const handleOk = async() => {  // 保存修改的个人信息
    let token = localStorage.getItem("token");
    setAuthToken(token);
    const res = await updateUserInfo(tmpUserAvatar, tmpUserName);
    //console.log('update: ', res);
    setUserAvatar(tmpUserAvatar);
    setUserName(tmpUserName);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const content = (  // 下拉框内容
    <div className='downItem'>
      <p onClick={showModal} style={{margin: '5px'}}>账号设置</p>
      <Divider style={{margin: '5px'}} />
      <p onClick={logout} style={{margin: '5px'}}>登出</p>
    </div>
  );
  const onChangeUserName = (e: any) => {
    setTmpUserName(e.target.value);
  }
  const beforeUpload = async (file: any) => {  // 上传前判断文件类型是否合法
    const isPNG = file.type === "image/png";
    const isJPEG = file.type === "image/jpeg";
    if (!(isPNG || isJPEG)) {
      message.error(`${file.name} 不是 png/jpg/jpeg 文件`);
    }
    return isPNG || isJPEG || Upload.LIST_IGNORE;
  };
  const onImgChange = async (info: any) => {  // 在修改个人信息对话框上传图片后
    let token = localStorage.getItem("token");
    setAuthToken(token);
    const { status } = info.file;
    if (status === "done") {
      info.file.preview = await getBase64(info.file.originFileObj as RcFile);
      var base64: string = info.file.preview;
      const uploadRes = await uploadImg(base64, "avatar");
      console.log(uploadRes);
      //console.log(uploadRes.data.fileUrl);
      setTmpUserAvatar(uploadRes.data.fileUrl);
    }
  };

  const showDrawer = () => {  // 控制历史记录抽屉
    //console.log("id: ", projectId);
    //console.log("name: ", projectName);
    setOpenHistory(true);
  };
  const onDrawerClose = () => {
    setOpenHistory(false);
  }; 
  const designsClicked = () => {  // 显示所有推演
    if (showProjects) {
      queryDesigns(projectId);
    }
    setShowProjects(!showProjects);
  }
  const historyDrawer = (  // 历史记录内容
    <Drawer
    title={showProjects?"所有项目":"历史记录"}
    width={720}
    onClose={onDrawerClose}
    open={openHistory}
    bodyStyle={{ paddingBottom:40, fontFamily:'PingFang' }}
    extra={
      <Space>
        <Button onClick={designsClicked} style={{fontFamily:'PingFang'}}>{showProjects?"返回当前项目":"全部项目"}</Button>
      </Space>
    }>
      {!showProjects &&  // 显示当前项目的历史记录
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={designs}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable>
                <Row justify={'space-between'}>
                  <Col span={9}>
                    <img className='history_img' src={item.reference_image}/>
                  </Col>
                  <Col span={15}>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>关键词：{item.prompt}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>画面精细度：{item.steps}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>随机值：{item.seed}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>创意度：{item.denoising}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>关键词符合度：{item.cfg}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>X轴：{item.x_label}，Y轴：{item.y_label}</p>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px'}}>图片分辨率：{item.width}, {item.height}</p>            
                  </Col>
                </Row>
              </Card>
            </List.Item>
        )}/>
      }
      {showProjects &&  // 显示所有项目
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={projects}
          pagination={{
            pageSize: 6,
          }}
          renderItem={(item) => (
            <List.Item>
              <Card bordered={false}>
                <Row justify={'space-between'} gutter={30}>
                  <Col span={14}>
                    <img className='design_img' src={item.image}/>
                  </Col>
                  <Col span={10}>    
                    <p style={{fontFamily: 'PingFang', fontSize: '16px', margin: '8px', textAlign: 'center'}}>{item.name}</p>         
                    <br/><br/><br/><br/>
                    <Button style={{fontFamily: 'PingFang', fontSize: '12px'}} onClick={()=>{onProjectClick(item)}}>查看项目历史</Button>
                  </Col>
                </Row>
              </Card>
            </List.Item>
        )}/>
      }
    </Drawer>
  );

  const ColorPicker = React.memo(({ brushColor, handleColorChange }:any) => {  // 取色板内容
    return (
      <SketchPicker
        width="200px"
        color={brushColor}
        onChangeComplete={handleColorChange}
      />
    );
  })

  const handleColorChange = React.useCallback((color:any) => {  // 当使用取色板改变颜色时，设置画笔颜色
    const {
      rgb: { r, g, b, a }
    } = color;
    setBrushColor(`rgba(${r}, ${g}, ${b},${a})`);
    setLastPenColor(`rgba(${r}, ${g}, ${b},${a})`);
    PubSub.publish("changeBrushColor", `rgba(${r}, ${g}, ${b},${a})`)
  }, []);

  const handleToolChange = React.useCallback(  // 当点击顶部的工具按钮时，要发给file页面参数信息
    (tool: any, size: any = 0) => {
      if (tool === "eraser") {
        //console.log("isEdit: ", isEdit);
        //if (isEdit) {
          setEraserSize(size);
          PubSub.publish("changeIsEraser", true);
          PubSub.publish("changeBrushSize", size);
          setEditMode("eraser"); 
        //}
      }
      if (tool === "pen") {
        //if (isEdit) {
          setBrushSize(size);
          setBrushColor(lastPenColor);
          PubSub.publish("changeIsEraser", false);
          PubSub.publish("changeBrushColor", lastPenColor);
          PubSub.publish("changeBrushSize", size);
          setEditMode("pen");  
        //}
      }
      if (tool === "editImg") {
        //if (isEdit) {
          PubSub.publish("changeToEditImgMode");
        //}
      }
    },
    [lastPenColor]
  );

  if(location.pathname === '/file'){  // 设计页面
    return ( 
      <div className='header'>
        <div className='header_l_ctn'>
          <div className='logo'>REAI</div>
          <img className='avatar' onClick={()=>history.push('/home')} src={'https://s2.loli.net/2023/02/23/a8w7pVv4lXtgbH9.png'}/>
          <p style={{fontFamily:'PingFang', fontSize:'12px', margin:'0px'}}>{projectName}</p>
          <Tag style={{fontFamily:'PingFang', fontSize:'12px'}}>模型：{modelName}</Tag>
        </div>
        <div className='header_m_ctn'>
          <div className="picker-ctn">
            <Tooltip placement="bottom" title="禁用或开启参考图片功能">
            <StopOutlined
              onClick={() => {
                PubSub.publish("changeGenerationMode");
              }}
            />
            </Tooltip>
          </div>
          <div className="picker-ctn">
            <PictureOutlined
              onClick={() => {
                handleToolChange("editImg")
              }}
            />
          </div>
          <div className="picker-ctn">
            <div className="picker-btn" style={{background:brushColor}} onClick={()=>setColorPicker(!colorPicker)}></div>
              {colorPicker && <div className="setting-item" >
                <ColorPicker
                  brushColor={brushColor}
                  handleColorChange={handleColorChange}
                />
              </div>}
          </div>
          <div className="picker-ctn">
            {(!(editMode==='pen')) &&
              <HighlightOutlined  
                onClick={() => {
                  handleToolChange("pen", brushSize)
                }}
              />
            }
            {(editMode==='pen') &&
              <HighlightFilled  
                onClick={() => {
                  handleToolChange("pen", brushSize)
                }}
              />
            }
            {(isEdit) && <div className='setting-item' style={{right:-665,top:100,padding:'10px 0',height:160,borderRadius:4}}>
              <HighlightOutlined style={{color:'var(--color-theme-light)'}}/>
              <Slider vertical min={1} value={brushSize} tooltip={{open:false}} onChange={(value)=>handleToolChange('pen',value)}/>
            </div>}
          </div>
          <div className="picker-ctn">
            {(!(editMode==='eraser')) &&
              <ToolOutlined  
                onClick={() => {
                  handleToolChange("eraser", eraserSize)
                }}
              />
            }
            {(editMode==='eraser') &&
              <ToolFilled  
                onClick={() => {
                  handleToolChange("eraser", eraserSize)
                }}
              />
            }
            {(isEdit) && <div className='setting-item' style={{right:-680,top:100,padding:'10px 0',height:160,borderRadius:4}}>
              <ToolOutlined style={{color:'var(--color-theme-light)'}}/>
              <Slider vertical min={1} value={eraserSize} tooltip={{open:false}} onChange={(value)=>handleToolChange('eraser',value)}/>
            </div>}
          </div>
        </div>
        <div className='header_r_ctn'>
          <Button className='header_btn' onClick={showDrawer}>
            <ClockCircleOutlined />历史记录
          </Button>
          <Button type="primary" className='header_btn' 
          onClick={() => {
            PubSub.publish("goResult");
          }}>
            快速生成
          </Button>
        </div>
        {historyDrawer}
      </div>
    )
  }
  else if(location.pathname === '/result'){  // 生成页面
    return (
      <div className='header'>
        <div className='header_l_ctn'>
          <div className='logo'>REAI</div>
          <img className='avatar' onClick={()=>history.push('/home')} src={'https://s2.loli.net/2023/02/23/a8w7pVv4lXtgbH9.png'}/>
          <p style={{fontFamily:'PingFang', fontSize:'12px', margin: '0px'}}>{projectName}</p>
        </div>
        <div className='header_r_ctn'>
          <Button className='header_btn' onClick={showDrawer}>
            <ClockCircleOutlined />历史记录
          </Button>
          <Button type="primary" className='header_btn' onClick={()=>history.push({ pathname: `/file?name=${projectName}?id=${projectId}` })}>返回设计</Button>
        </div>
        {historyDrawer}
      </div>
    )
  }
  else if(location.pathname === '/home'){  // 主页
    return (
      <div className='header'>
        <div className='header_l_ctn'>
          <div className='logo'>REAI</div>
        </div>
        <div className='header_r_ctn'>
          {/* */}
          <div className='userInfo'>
            <p style={{color: '#555555', fontSize:'6px', margin: '0px'}}>{userName}</p>
            <p style={{color: '#aaaaaa', fontSize:'2px', margin: '0px'}}>{userEmail}</p>
          </div>   
          <img className='avatar' src={userAvatar}/>          
          <Popover placement="bottomRight" content={content} trigger="click" arrow={false} open={openDownInfo} onOpenChange={handleOpenDownInfo}>
            <DownOutlined className='downInfo' style={{fontSize: '12px'}}/>
          </Popover>
          <Modal style={{fontFamily: 'PingFang'}}
          title="账号设置" 
          open={isModalOpen} 
          onCancel={handleCancel}
          footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            保存
          </Button>]}>
            <div className='modal'>
              <div className='modal_col_left'>
                <img className='avatar_show' src={tmpUserAvatar}/>
                  <Upload onChange={onImgChange} beforeUpload={beforeUpload} showUploadList={false}>
                    <Button style={{fontFamily: 'PingFang', fontSize: '16px'}}>上传头像</Button>
                {/* <form method="post" encType="multipart/form-data">
                  <input name="file" type="file" onChange={onImgChange} id="file"/>
                </form> */}
                  </Upload>
              </div>
              <div className='modal_col'>
                <p style={{fontFamily: 'PingFang', fontSize: '16px'}}>邮箱</p>
                <p style={{fontFamily: 'PingFang', fontSize: '14px', color: '#aaaaaa'}}>{userEmail}</p>
                <p style={{fontFamily: 'PingFang', fontSize: '16px'}}>用户名</p>
                <Input placeholder={userName} onChange={(e)=>onChangeUserName(e)}></Input>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    ) 
  }
  return (
  <div className='header'>
      <div className='header_l_ctn'>
      <div className='logo'>REAI</div>
        <p style={{fontFamily:'PingFang', fontSize:'12px'}}>我的作品-1副本</p>
      </div>
      <div className='header_r_ctn'>
          <Button className='header_btn'>
            <ClockCircleOutlined />历史记录
          </Button>
          <Button type="primary" className='header_btn' onClick={()=>history.push('/file')}>返回设计</Button>
        </div>
    </div>
  )
}

export default Header