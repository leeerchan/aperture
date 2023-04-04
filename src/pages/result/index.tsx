import React, {useState, useEffect} from 'react'
import { Service, history, useLocation } from "umi";
import { Input, Radio, Slider, Col, Button, Row, Modal, Select, Steps, Descriptions, Tooltip} from 'antd';
import { DownloadOutlined, BackwardOutlined } from '@ant-design/icons';
import Header from '@/components/header'
import toZip from '@/utils/save';
import { TagInput } from '@douyinfe/semi-ui';
import translate from 'google-translate-api-x';

import './index.less'
import { saveDesignInfo, uploadImg } from '@/services/requestList';
import { render } from 'react-dom';

const { TextArea } = Input;

/* 从设计页面传过来参考图片的base64后，就计算生成尺寸，并调用setSize */

const computeOutputSize = (inputImg: string) => {  // 计算出合适的宽高，作为输出图片的尺寸
  let img = new Image();
  img.src = inputImg;
  let w = 512; let h = 512;
  if (img.width > img.height) {  
    w = Math.floor(img.width / img.height * 512);
    w = w - (w % 16);
  }
  else {  
    h = Math.floor(img.height / img.width * 512);
    h = h - (h % 16);
  } 
  return [w, h];
}

const translate2En = async(ch: string) => {  // 将中文文本翻译成英文，并显示在第二个输入框
  const res = await translate(ch, {to: 'en'});
  //console.log(res.text);
  return res.text;
}

const index = () => {
  const location: any = useLocation();
  const [projectId, setProjectId] = useState(0);
  const [projectName, setProjectName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);  // “更多设置”对话框是否打开
  const OPTIONS = ['随机值', '创意度', '关键词符合度', '画面精细度'];  // 设置为坐标轴的参数名称集合
  const [xTempLabel, setXTempLabel] = useState(OPTIONS[0]);  // 在“更多设置”中暂时选中的x轴参数
  const [yTempLabel, setYTempLabel] = useState(OPTIONS[1]);  // 在“更多设置”中暂时选中的y轴参数
  const [chosenParams, setChosenParams] = useState<string[]>(['随机值', '创意度']);  // “更多设置”的第一页定下的坐标轴参数
  const [defaultValue1, setDefaultValue1] = useState(70);  // “更多设置”第二页的第一个默认值
  const [defaultValue2, setDefaultValue2] = useState(50);  // “更多设置”第二页的第二个默认值
  const xFilteredOptions = OPTIONS.filter((o) => !yTempLabel.includes(o));  // 保证选x轴的参数和y轴此时的参数互斥
  const yFilteredOptions = OPTIONS.filter((o) => !xTempLabel.includes(o));  // 保证选y轴的参数和x轴此时的参数互斥
  const defaultFilterOptions = OPTIONS.filter((o) => !chosenParams.includes(o));  // 得到“更多设置”的第二页需要设置的默认参数

  const [txtValue, setTxtValue] = useState("");  // 用户输入的文本关键词
  const [tags, setTags] = useState(Array<string>);  // 从左侧资源选择的标签
  const [txtValueEn, setTxtValueEn] = useState("");  // 翻译过后的文本关键词
  
  const [numAbled, setNumAbled] = useState(4);  // 生成数量，x/y轴参数据此设为可操作/不可操作
  const [referImgSrc, setReferImgSrc] = useState('');  // 参考图片
  const [size, setSize] = useState([512, 512]);  // 图片大小
  const [params, setParams] = useState<{ [key: string]: number[]; }>({  // 生成参数（字典类型）
    "随机值" : [10, 20, 30, 40],  // 随机值
    "创意度" : [0.3, 0.4, 0.5, 0.6],  // 创意度
    "关键词符合度" : [70, -1, -1, -1],  // 关键词符合度
    "画面精细度": [50, -1, -1, -1]  // 画面精细度
  });
  const [genParams, setGenParams] = useState<{ [key: string]: number[]; }>({  // 生成参数（字典类型）
    "随机值" : [10, 20, 30, 40],  // 随机值
    "创意度" : [0.3, 0.4, 0.5, 0.6],  // 创意度
    "关键词符合度" : [70, -1, -1, -1],  // 关键词符合度
    "画面精细度": [50, -1, -1, -1]  // 画面精细度
  });
  const [xLabel, setXLabel] = useState("随机值");  // x轴参数名称
  const [yLabel, setYLabel] = useState("创意度");  // y轴参数名称
  const [tip, setTip] = useState<{ [key: string]: string; }>({
    "随机值" : "不同的随机值将生成细节各异的图片",  // 随机值
    "创意度" : "创意度越高，意味着生成的图片与参考图片相差越大",  // 创意度
    "关键词符合度" : "关键词符合度越高，文本关键词对生成图片的指导就越强",  // 关键词符合度
    "画面精细度": "画面精细度越高，生成的细节越丰富、真实，但生成花费的时间也会增加"  // 画面精细度
  });
  const [valueRange, setValueRange] = useState<{ [key: string]: number[]; }>({
    "随机值" : [10000, 1],  // 随机值
    "创意度" : [1, 0.05],  // 创意度
    "关键词符合度" : [20, 1],  // 关键词符合度
    "画面精细度": [100, 1]  // 画面精细度
  });
  useEffect(() => {
    const pName = window.location.search.slice(1).split('?')[0].split('=')[1];
    const pId = parseInt(window.location.search.slice(1).split('?')[1].split('=')[1]);
    setProjectId(pId);
    setProjectName(pName);

    if (location) {
      setReferImgSrc(location.state.img);
      setTxtValue(location.state.txt);
      setTags(location.state.tags);
      //const en = translate2En(location.start.txt);
      //setTxtValueEn(await en);
    }
  }, []);

  const [inspectImg, setInspectImg] = useState('https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png');  // 大图显示的内容
  const [inspectPos, setInspectPos] = useState([0, 0]); // 右侧大图对应左侧栅格的坐标
  const onThumbsClick = (e: any) => {  // 点击左侧缩略图，右侧大图显示对应图片以及对应参数
    const src = e.currentTarget.getAttribute("src");
    setInspectImg(src);
    for (let i = 0; i < numAbled; i++) {
      for (let j = 0; j < numAbled; j++) {
        if (src === list[i*numAbled+j]) {
          setInspectPos([i, j]);  // 栅格坐标改变后，大图底部的参数也会改变
        }
      }
    }
  }
  const [list, setList] = useState(['https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png',
                                   'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png',
                                   'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png',
                                   'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png', 'https://s2.loli.net/2023/03/08/9DbVCz7YyTcQqKF.png'])
  const rows = [];  // 根据生成的图片列表，动态设置左侧的栅格
  for (let i = 0; i < numAbled; i++) {
    let cols = []
    for (let j = 0; j < numAbled; j++) {
      cols.push(
        <Col key={j.toString()} span={24 / numAbled}>
          <div><img className='result_img' src={list[i*numAbled+j]} onClick={(e)=>onThumbsClick(e)}/></div>
        </Col>);
    }
    rows.push(<Row gutter={5}>{cols}</Row>)
  }

  const batchSave = () => {  // 批量保存生成的图片
    toZip(list, '生成结果.zip');
  }
  const imageSave = () => {  // 保存右侧的单张大图
    console.log([inspectImg]);
    toZip([inspectImg], '生成结果.zip');
  }
  const imageSend = () => {  // 把生成结果送入设计页面
    history.push({ pathname: `/file?name=${projectName}?id=${projectId}`}, {img: inspectImg});
  }
  const numChange = (e: any) => {  // 当生成数量改变时
    setNumAbled(e.target.value);
  }
  const sizeChange = (e: any) => {  // 当生成宽高比例改变时
    if (e.target.value === 1) {
      var size = computeOutputSize(referImgSrc);
      let w = size[0];
      let h = size[1];
      setSize([w, h]);
    }
    else if (e.target.value === 2) {
      setSize([512, 512]);
    }
    else if (e.target.value === 3) {
      setSize([672, 512]);
    }
    else if (e.target.value === 4) {
      setSize([912, 512]);
    }
    else if (e.target.value === 5) {
      setSize([512, 672]);
    }
  }
  const x1Change = (value: any) => {  // 当x轴参数改变时
    params[xLabel][0] = value;
  }
  const x2Change = (value: any) => { 
    params[xLabel][1] = value;
  }
  const x3Change = (value: any) => { 
    params[xLabel][2] = value;
  }
  const x4Change = (value: any) => { 
    params[xLabel][3] = value;
  }
  const y1Change = (value: any) => {  // 当y轴参数改变时
    params[yLabel][0] = value;
  }
  const y2Change = (value: any) => { 
    params[yLabel][1] = value;
  }
  const y3Change = (value: any) => { 
    params[yLabel][2] = value;
  }
  const y4Change = (value: any) => { 
    params[yLabel][3] = value;
  }

  const generate = async() => {  // 生成图片
    setGenParams(params);

    // var upload_ref;
    // if (referImgSrc !== "") {
    //   upload_ref = await uploadImg(referImgSrc, "reference");
    // }

    var prompt: string = txtValue;
    for (let i=0; i < tags.length; i+=1) {
      prompt += ", "
      prompt += tags[i];
    }

    console.log(prompt);

    // let all_data = {
    //   projectId: projectId,
    //   designId: 0,
    //   argument: {
    //     prompt: txtValue,
    //     reference_image: (referImgSrc !== "")?(upload_ref?.data.fileUrl):"",
    //     width: size[0],
    //     height: size[1],
    //     seed: ((xLabel === "随机值") || (yLabel === "随机值")) ? params["随机值"].slice(0, numAbled).toString() : params["随机值"][0].toString(),
    //     denoising_strength: ((xLabel === "创意度") || (yLabel === "创意度")) ? params["创意度"].slice(0, numAbled).toString() : params["创意度"][0].toString(),
    //     steps: ((xLabel === "画面精细度") || (yLabel === "画面精细度")) ? params["画面精细度"].slice(0, numAbled).toString() : params["画面精细度"][0].toString(),
    //     cfg_scale: ((xLabel === "关键词符合度") || (yLabel === "关键词符合度")) ? params["关键词符合度"].slice(0, numAbled).toString() : params["关键词符合度"][0].toString(),
    //     x_label: xLabel,
    //     y_label: yLabel,
    //   }
    // }
    // //console.log("all_data: ", all_data);
    // const save_res = await saveDesignInfo(JSON.stringify(all_data));
    // //console.log(save_res);
    // const designId = save_res.data.designId;

    // for (let i = 0; i < numAbled; i++) {
    //   var seed_item = (yLabel == "随机值") ? params["随机值"][i] : params["随机值"][0]
    //   var cfg_scale_item = (yLabel == "关键词符合度") ? params["关键词符合度"][i] : params["关键词符合度"][0]
    //   var steps_item = (yLabel == "画面精细度") ? params["画面精细度"][i] : params["画面精细度"][0]
    //   var denoising_strength_item = (yLabel == "创意度") ? params["创意度"][i] : params["创意度"][0]
    //   for (let j = 0; j < numAbled; j++) {
    //     if (xLabel == "随机值") {
    //       seed_item = params["随机值"][j];}
    //     else if (xLabel == "关键词符合度") {
    //       cfg_scale_item = params["关键词符合度"][j];}
    //     else if (xLabel == "画面精细度") {
    //       steps_item = params["画面精细度"][j];}
    //     else if (xLabel == "创意度") {
    //       denoising_strength_item = params["创意度"][j];}

    //     let data = {
    //       projectId: projectId,
    //       projectName: "test",
    //       designId: designId,
    //       argument: {
    //         prompt: txtValue,
    //         reference_image: (referImgSrc !== "")?(upload_ref?.data.fileUrl):"",
    //         width: size[0],
    //         height: size[1],
    //         seed: seed_item,
    //         denoising_strength: denoising_strength_item,
    //         steps: steps_item,
    //         cfg_scale: cfg_scale_item / 10,
    //         x_label: xLabel,
    //         y_label: yLabel,
    //       }
    //     }  
    //     console.log(data);
    //     const res = await saveDesignInfo(JSON.stringify(data));
    //     console.log(res);
    //     var tmpList = list;
    //     tmpList[i*numAbled + j] = 'data:image/png;base64,' + res.data.images[0];
    //     //console.log('data:image/png;base64,' + res.data.images[0]);
    //     setList(tmpList);
    //   }
    // }
  }

  // 控制“更多设置”的分页
  const [current, setCurrent] = useState(0);
  const next = () => {  // 更多设置的第一页跳转后，定下已经选择好的坐标轴参数
    setChosenParams([xTempLabel, yTempLabel]);
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  // 控制“更多设置”对话框的显示
  const showModal = () => {
    setCurrent(0);
    setIsModalOpen(true);
  };
  const handleOk = () => {  // 确认修改后，在生成页的参数那里显示修改后的结果
    params[xTempLabel] = [params[xLabel][0],params[xLabel][1],params[xLabel][2],params[xLabel][3]];
    params[yTempLabel] = [params[yLabel][0],params[yLabel][1],params[yLabel][2],params[yLabel][3]];
    params[defaultFilterOptions[0]][0] = defaultValue1;
    params[defaultFilterOptions[1]][0] = defaultValue2;
    setXLabel(xTempLabel);
    setYLabel(yTempLabel);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setChosenParams([xLabel, yLabel])
    setIsModalOpen(false);
  };
  const xLabelChange = (value: any) => {  // 在更多设置中修改x轴参数名称
    setXTempLabel(value);
  }
  const yLabelChange = (value: any) => {  // 在更多设置中修改y轴参数名称
    setYTempLabel(value);
  }
  const defaultValue1Change = (value: any) => {  // 在更多设置中修改第一个默认参数
    setDefaultValue1(value);
  }
  const defaultValue2Change = (value: any) => {  // 在更多设置中修改第二个默认参数
    setDefaultValue2(value);
  }

  return (
    <div className='result_ctn'>
    <link rel="stylesheet" href="%PUBLIC_URL%/font.css"></link>
      <Header/>
      <div  className='result'>
        <div className='result_top_ctn'>
          <div className='result_init_img_ctn'>
            <img src={referImgSrc} alt="reference image" />
          </div>
          <div className='result_props_ctn'>
            <Row align={"middle"} justify={'space-between'}>
              <Col>
                <p style={{fontFamily: 'PingFang', fontSize:'16px'}}>生成设置</p>
              </Col>
              <Col>
                <Button onClick={showModal} style={{fontFamily: 'PingFang', fontSize:'12px'}}>
                  更多设置
                </Button>
              </Col>
            </Row>
            <div className='para_ctn'>
              <div className='para_item'>
                <TagInput 
                  style={{ resize: 'none', fontFamily: 'PingFang', fontSize: '12px'}}
                  showClear 
                  allowDuplicates={false}
                  value={tags} 
                  onChange={v => {setTags(v);}}
                  onInputChange={async (input, e) => {
                    setTxtValue(input);
                  }}
                  inputValue={txtValue}
                />
                <p style={{fontFamily: 'PingFang', fontSize:'12px', margin: '0px'}}>生成数量</p>
                <Row>
                  <Col span={24}>
                    <Radio.Group defaultValue={4} buttonStyle="solid" onChange={(e)=>numChange(e)}>
                      <Radio value={1} className='radio_button'>1 x 1</Radio>
                      <Radio value={2} className='radio_button'>2 x 2</Radio>
                      <Radio value={3} className='radio_button'>3 x 3</Radio>
                      <Radio value={4} className='radio_button'>4 x 4</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
                <p style={{fontFamily: 'PingFang', fontSize:'12px', margin: '0px'}}>生成宽高比</p>
                <Row>
                  <Col span={24}>
                    <Radio.Group defaultValue={2} buttonStyle="solid" onChange={(e)=>sizeChange(e)}>
                      <Radio value={1} disabled={(referImgSrc==="")?true:false} className='radio_button'>参考图片</Radio>
                      <Radio value={2} className='radio_button'>1 : 1</Radio>
                      <Radio value={3} className='radio_button'>4 : 3</Radio>
                      <Radio value={4} className='radio_button'>16 : 9</Radio>
                      <Radio value={5} className='radio_button'>3 : 4</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
              </div>
              <div className='para_item'>
                <Tooltip placement="topLeft" title={tip[xLabel]}>
                  <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>X轴：{xLabel}</p>
                </Tooltip>
                <Row align="middle" justify={'space-around'}>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[xLabel][0]} defaultValue={valueRange[xLabel][0]/10} step={valueRange[xLabel][1]} onAfterChange={(value)=>x1Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[xLabel][0]} defaultValue={valueRange[xLabel][0]/5} step={valueRange[xLabel][1]} disabled={(numAbled<2)} onAfterChange={(value)=>x2Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[xLabel][0]} defaultValue={valueRange[xLabel][0]/10*3} step={valueRange[xLabel][1]} disabled={(numAbled<3)} onAfterChange={(value)=>x3Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[xLabel][0]} defaultValue={valueRange[xLabel][0]/5*2} step={valueRange[xLabel][1]} disabled={(numAbled<4)} onAfterChange={(value)=>x4Change(value)}/>
                  </Col>
                </Row>
                <Tooltip placement="topLeft" title={tip[yLabel]}>
                  <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>Y轴：{yLabel}</p>
                </Tooltip>
                <Row align="middle" justify={'space-around'}>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[yLabel][0]} defaultValue={valueRange[yLabel][0]/10} step={valueRange[yLabel][1]} onAfterChange={(value)=>y1Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[yLabel][0]} defaultValue={valueRange[yLabel][0]/10*2} step={valueRange[yLabel][1]} disabled={(numAbled<2)} onAfterChange={(value)=>y2Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[yLabel][0]} defaultValue={valueRange[yLabel][0]/10*3} step={valueRange[yLabel][1]} onAfterChange={(value)=>y3Change(value)}/>
                  </Col>
                  <Col span={6}>
                    <Slider min={0} max={valueRange[yLabel][0]} defaultValue={valueRange[yLabel][0]/10*4} step={valueRange[yLabel][1]} disabled={(numAbled<4)} onAfterChange={(value)=>y4Change(value)}/>
                  </Col>
                </Row>  
              </div>
            </div>
          </div>
        </div>
        <div className='result_middle_ctn'>
          <Button type="primary" className='result_button' onClick={generate}>
            生成
          </Button>
          <Button className='result_button' onClick={batchSave}>
            批量保存
          </Button>
        </div>
        <Modal style={{fontFamily: 'PingFang'}}
          title="更多设置" 
          open={isModalOpen} 
          onCancel={handleCancel}
          footer={null}>
          <Steps current={current} items={[{title: '坐标轴参数名称'}, {title: '其余参数默认值'}]} style={{fontFamily: 'PingFang'}}/>
            <div style={{ marginTop: 24 }}>
              {current < 1 && (
                <div>
                  <Row justify="space-around" align="middle">
                    <Col span={4} offset={2}>
                      <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>X轴</p>
                    </Col>
                    <Col span={18}>
                    <Select
                      defaultValue="随机值"
                      value={xTempLabel}
                      style={{ width: 180 }}
                      onChange = {(value)=>{xLabelChange(value)}}
                      options={xFilteredOptions.map((item) => ({
                        value: item,
                        label: item,
                      }))}
                    />
                    </Col>
                  <br/><br/><br/>
                  </Row>
                  <Row justify="space-around" align="middle">
                    <Col span={4} offset={2}>
                      <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>Y轴</p>
                    </Col>
                    <Col span={18}>
                      <Select
                        defaultValue="创意度"
                        value={yTempLabel}
                        style={{ width: 180 }}
                        onChange = {(value)=>{yLabelChange(value)}}
                        options={yFilteredOptions.map((item) => ({
                          value: item,
                          label: item,
                        }))}
                      />
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                  <Button type="primary" onClick={() => next()} style={{fontFamily: 'PingFang'}}>
                    下一步
                  </Button>
                </Row>
              </div>
              )}
              {current > 0 && (
                <div>
                  <Row align="middle">
                    <Col span={7}>
                      <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>{defaultFilterOptions[0]}</p>
                    </Col>
                    <Col span={17}>
                      <Slider min={0} max={valueRange[defaultFilterOptions[0]][0]}
                       defaultValue={valueRange[defaultFilterOptions[0]][0]/2}
                       step={valueRange[defaultFilterOptions[0]][1]} onChange={(value)=>{defaultValue1Change(value)}}/>
                    </Col>
                  </Row>
                  <Row align="middle">
                    <Col span={7}>
                      <p style={{fontFamily: 'PingFang', fontSize:'12px', marginTop:0}}>{defaultFilterOptions[1]}</p>
                    </Col>
                    <Col span={17}>
                      <Slider min={0} max={valueRange[defaultFilterOptions[1]][0]}
                       defaultValue={valueRange[defaultFilterOptions[1]][0]/2}
                       step={valueRange[defaultFilterOptions[1]][1]} onChange={(value)=>{defaultValue2Change(value)}}/>
                    </Col>
                  </Row>
                  <br/><br/>
                  <Row>
                    <Col span={4}>
                      <Button style={{ margin: '0 8px', fontFamily: 'PingFang' }} onClick={() => prev()}>
                        上一步
                      </Button>
                    </Col>
                    <Col offset={12} span={4}>
                      <Button key="back" onClick={handleCancel} style={{fontFamily: 'PingFang'}}>
                        取消
                      </Button>
                    </Col>
                    <Col span={4}>
                      <Button key="submit" type="primary" onClick={handleOk} style={{fontFamily: 'PingFang'}}>
                        确认
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
        </Modal>
        <div className='result_btm_ctn'>
          <div className='result_grid'>
            <Row gutter={5}>
              {rows}
            </Row>
          </div>
          <div className='inspect_ctn'>
            <img className='inspect_img' src={inspectImg}/>
            <div className='rightUp-ctn'>
              <Tooltip placement="topLeft" title="下载本图片">
                <div className='download-btn' onClick={imageSave}><DownloadOutlined/></div>
              </Tooltip>
              <Tooltip placement="topLeft" title="将该图片送入设计页面">
                <div className='download-btn' onClick={imageSend}><BackwardOutlined/></div>
              </Tooltip>
            </div>
            <Descriptions className='inspect_info_ctn' title="生成参数">
              <Descriptions.Item label="图片分辨率">{size[0]}, {size[1]}</Descriptions.Item>
              <Descriptions.Item label={xLabel}>{genParams[xLabel][inspectPos[1]]}</Descriptions.Item>
              <Descriptions.Item label={yLabel}>{genParams[yLabel][inspectPos[0]]}</Descriptions.Item>
              <Descriptions.Item label={defaultFilterOptions[0]}>{genParams[defaultFilterOptions[0]][0]}</Descriptions.Item>
              <Descriptions.Item label={defaultFilterOptions[1]}>{genParams[defaultFilterOptions[1]][0]}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;