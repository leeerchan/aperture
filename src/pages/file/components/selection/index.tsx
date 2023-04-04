import React, {useState,useEffect} from 'react'
import { LeftOutlined, CrownOutlined, ProfileOutlined, BuildOutlined, SkinOutlined, SearchOutlined, InfoCircleOutlined, StarOutlined } from '@ant-design/icons';
import { Input, Button, Segmented, List, Card, Row, Col, Popover, TabsProps, Tabs } from 'antd';
import PubSub from "pubsub-js";

import {getResource, getModelList} from '@/services/requestList'
import './index.less'
import setAuthToken from '@/utils/setAuthToken';

const { Meta } = Card;


const index = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const [tab, setTab] = useState(0)
  const [current, setCurrent] = useState('library');
  const [data, setData] = useState<any>([]);

  const [model, setModel] = useState<Array<{name:string; image:string; desc:string}>>([]);
  const [product, setProduct] = useState<Array<{name:string; image:string; desc:string}>>([]);
  const [style, setStyle] = useState<Array<{name:string; image:string; desc:string}>>([]);
  const [master, setMaster] = useState<Array<{name:string; image:string; desc:string}>>([]);
  const [material, setMaterial] = useState<Array<{name:string; image:string; desc:string}>>([]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `风格`,
      children: (<div style={{width: '324px'}}>
        <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={style}
        renderItem={(item) => (
          <List.Item>
              <Card 
                hoverable
                bordered={false}
                cover={
                  <img
                    src={item.image} 
                    onClick={()=>{clickResource(item.name)}}
                  />
                }
              >
                <Row justify='space-between' align='middle'>
                  <Col>
                    <p style={{fontFamily: 'PingFang', fontSize: '12px', margin: '0px', textAlign: 'left'}}>{item.name}</p>  
                  </Col>
                  <Col>
                    <Popover placement="right" title={item.name} 
                    content={(<div><p>{item.desc}</p></div>)} trigger="click">
                      <InfoCircleOutlined/>
                    </Popover>                     
                  </Col>
                </Row>
              </Card>
          </List.Item>
        )}/></div>),
    },
    {
      key: '2',
      label: `设计师`,
      children: (<div style={{width: '324px'}}>
      <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={master}
      renderItem={(item) => (
        <List.Item>
            <Card 
              hoverable
              bordered={false}
              cover={
                <img
                  src={item.image} 
                  onClick={()=>{clickResource(item.name)}}
                />
              }
            >
              <Row justify='space-between' align='middle'>
                <Col>
                  <p style={{fontFamily: 'PingFang', fontSize: '12px', margin: '0px', textAlign: 'left'}}>{item.name}</p>  
                </Col>
                <Col>
                  <Popover placement="right" title={item.name} 
                  content={(<div><p>{item.desc}</p></div>)} trigger="click">
                    <InfoCircleOutlined/>
                  </Popover>                     
                </Col>
              </Row>
            </Card>
        </List.Item>
      )}/></div>),
    },
    {
      key: '3',
      label: `材质`,
      children: (<div style={{width: '324px'}}>
      <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={material}
      renderItem={(item) => (
        <List.Item>
            <Card 
              hoverable
              bordered={false}
              cover={
                <img
                  src={item.image} 
                  onClick={()=>{clickResource(item.name)}}
                />
              }
            >
              <Row justify='space-between' align='middle'>
                <Col>
                  <p style={{fontFamily: 'PingFang', fontSize: '12px', margin: '0px', textAlign: 'left'}}>{item.name}</p>  
                </Col>
                <Col>
                  <Popover placement="right" title={item.name} 
                  content={(<div><p>{item.desc}</p></div>)} trigger="click">
                    <InfoCircleOutlined/>
                  </Popover>                     
                </Col>
              </Row>
            </Card>
        </List.Item>
      )}/></div>),
    },
  ];

  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);
    getData();
  }, []);

  const getData = async () => {
    const res = await getModelList();
    //console.log(res);
    var tmpModel = [];
    for (var i = 0; i < res.data.data[0].lists.length; i++) {
      tmpModel.push({
        name: res.data.data[0].lists[i].name,
        image: res.data.data[0].lists[i].imgUrl,
        desc: res.data.data[0].lists[i].description,
      });
    }
    setModel(tmpModel);

    var tmpProduct = [];
    for (var i = 0; i < res.data.data[1].lists.length; i++) {
      tmpProduct.push({
        name: res.data.data[1].lists[i].name,
        image: res.data.data[1].lists[i].imgUrl,
        desc: res.data.data[1].lists[i].description,
      });
    }
    setProduct(tmpProduct);

    var tmpSyle = [];
    for (var i = 0; i < res.data.data[2].lists.length; i++) {
      tmpSyle.push({
        name: res.data.data[2].lists[i].name,
        image: res.data.data[2].lists[i].imgUrl,
        desc: res.data.data[2].lists[i].description,
      });
    }
    setStyle(tmpSyle);

    var tmpMaster = [];
    for (var i = 0; i < res.data.data[3].lists.length; i++) {
      tmpMaster.push({
        name: res.data.data[3].lists[i].name,
        image: res.data.data[3].lists[i].imgUrl,
        desc: res.data.data[3].lists[i].description,
      });
    }
    setMaster(tmpMaster);

    var tmpMaterial = [];
    for (var i = 0; i < res.data.data[4].lists.length; i++) {
      tmpMaterial.push({
        name: res.data.data[4].lists[i].name,
        image: res.data.data[4].lists[i].imgUrl,
        desc: res.data.data[4].lists[i].description,
      });
    }
    setMaterial(tmpMaterial);
  }

  const clickResource = (txt: string) => {
    PubSub.publish("addTag", txt);
  }

  const clickModel = (txt: string) => {
    PubSub.publish("setModel", txt);
  }

  return (
    <div className='select_ctn' style={{width:isCollapse?48:400}} >
      <div className='select_bar_ctn' >
        <div className='tab_bar'>
          <div className={`option_btn ${tab==0?'option_btn-focused':''}`} onClick={()=>setTab(0)}>
            <CrownOutlined />
            <p style={{fontFamily: 'PingFang', fontSize: '10px'}}>模型</p> 
          </div>
          <div className={`option_btn ${tab==1?'option_btn-focused':''}`} onClick={()=>setTab(1)}>
            <ProfileOutlined /> 
            <p style={{fontFamily: 'PingFang', fontSize: '10px'}}>产品</p> 
          </div>
          <div className={`option_btn ${tab==2?'option_btn-focused':''}`} onClick={()=>setTab(2)}>
            <BuildOutlined /> 
            <p style={{fontFamily: 'PingFang', fontSize: '10px'}}>关键词</p> 
          </div>
        </div>
        <div className='option_btn' onClick={()=>{setIsCollapse(!isCollapse)}}>
          <LeftOutlined  style={{transform:`rotate(${isCollapse?180:0}deg`}}/> 
        </div>
      </div>
      <div className='select_list_ctn'  style={{transform:`translateX(${isCollapse?-352:0}px)`}}>
        <div className='select_blank_box'></div>
        <div className='select_list' >
          <div className='top_menu'>
            <Segmented style={{fontFamily: 'PingFang', fontSize: '14px'}} block options={['公共资源', '我的收藏']} />
          </div>
          <div className='search_input'>
          <Input 
            size='small'
            placeholder="搜索" 
            suffix={<Button type="text" icon={<SearchOutlined />} />} 
          />
          </div>
          {tab == 0 && 
            <div className='select_list_grid-one'>
              <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={model}
              renderItem={(item) => (
                <List.Item>
                    <Card 
                      hoverable
                      bordered={false}
                      style={{ width: '100%' }}
                      cover={
                        <img
                          src={item.image} 
                          onClick={()=>{clickModel(item.name)}}
                        />
                      }
                    >
                      <Row justify='space-between' align='middle'>
                        <Col>
                          <p style={{fontFamily: 'PingFang', fontSize: '12px', margin: '0px', textAlign: 'left'}}>{item.name}</p>  
                        </Col>
                        <Col>
                          <Popover placement="right" title={item.name}
                            content={(<div><p>{item.desc}</p></div>)} trigger="click">
                            <InfoCircleOutlined/>
                          </Popover>                     
                        </Col>
                      </Row>
                    </Card>
                </List.Item>
              )}/>
            </div>
          }
          {tab == 1 && 
            <div className='select_list_grid-one'>
              <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={product}
              renderItem={(item) => (
                <List.Item>
                    <Card 
                      bordered={false}
                      style={{ width: '100%' }}
                      cover={
                        <img
                          src={item.image} 
                        />
                      }
                    >
                      <Row justify='space-between' align='middle'>
                        <Col>
                          <p style={{fontFamily: 'PingFang', fontSize: '12px', margin: '0px', textAlign: 'left'}}>{item.name}</p>  
                        </Col>
                        <Col>
                          <Popover placement="right" title={item.name} overlayStyle={{width: '300px'}}
                          content={(<div><p>{item.desc}</p></div>)} trigger="click">
                            <InfoCircleOutlined/>
                          </Popover>                     
                        </Col>
                      </Row>
                    </Card>
                </List.Item>
              )}/>
            </div>
          }
          {tab == 2 && 
            <div className='select_list_grid-two'>
              <Tabs style={{fontFamily: 'PingFang'}} defaultActiveKey="1" items={items} />
            </div>
          }
          <div className='bottom_blank_box'></div>
        </div>
      </div>

    </div>
  )
}

export default index