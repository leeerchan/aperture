import React, {useState, useEffect} from 'react'
import type { PaginationProps } from 'antd';
import { Pagination, List, Card, Modal, Button, Input, Row, Col, message, Steps, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history,useLocation} from 'umi';
import PubSub from "pubsub-js";

import './index.less';
import Header from '@/components/header';
import { getDemoList, queryUserInfo, saveDesignInfo, getMyProject } from '@/services/requestList';
import setAuthToken from '@/utils/setAuthToken';
import MyTheme from '../../assets/MyTheme';


const index = () => {
  const location: any = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [current, setCurrent] = useState(1);  // 历史项目分页显示，记录当前页面
  const [isModalOpen, setIsModalOpen] = useState(false);  // 是否显示新建设计对话框
  const [demoOpen, setDemoOpen] = useState(-1);  // 案例演示对话框是否打开
  const [projectName, setProjectName] = useState("");

  const [demo, setDemo] = useState<Array<{id:number; title:string; content:string; images:Array<{step:string}>}>>([]);
  const [projects, setProjects] = useState<Array<{id:number; name:string; image:string}>>([]);
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);
    if (location) {
      if (location.state?.isLogin) {
        messageApi.success("登录成功");
      }
    }
    getData();
  }, []);

  const getData = async () => {
    const res = await getDemoList();
    var tmpDemo = [];
    for (var i = 0; i < res.data.dataSize; i++) {
      tmpDemo.push({
        id: res.data.data[i].demoId,
        title: res.data.data[i].demoName,
        content: res.data.data[i].demoDesc,
        images: JSON.parse(res.data.data[i].dataJson).steps,
      });
    }
    setDemo(tmpDemo);

    const usr = await queryUserInfo();
    PubSub.publish('setUser', {email: usr.data.email, name: usr.data.name, avatar: usr.data.avatar});

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

  const showModal = () => {  // 新建项目
    setIsModalOpen(true);
  };
  const handleOk = async() => {
    setIsModalOpen(false);
    let data = {
      projectId: 0,
      projectName: projectName
    }  
    //console.log(data);
    const res = await saveDesignInfo(JSON.stringify(data));
    //console.log(res);
    // PubSub.publish("setProject", {id: res.data.projectId, name: projectName});
    // history.push('/file', {projectId: res.data.projectId});
    history.push({ pathname: `/file?name=${projectName}?id=${res.data.projectId}` });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDemo = (id: number) => {
    setDemoOpen(id-1);
  };
  const handleDemoOk = () => {
    setDemoOpen(-1);
    setCurrentDemo(0);
  };
  const handleDemoCancel = () => {
    setDemoOpen(-1);
  };
  const [currentDemo, setCurrentDemo] = useState(0);
  const next = () => { 
    setCurrentDemo(currentDemo + 1);
  };
  const prev = () => {
    setCurrentDemo(currentDemo - 1);
  };

  const onChange: PaginationProps['onChange'] = (page) => {
    //console.log(page);
    setCurrent(page);
  };

  const enterProject = (item: any) => {
    history.push({ pathname: `/file?name=${item.name}?id=${item.id}` });
  }
  
  return (
    <ConfigProvider
    //theme={MyTheme}
    >
    <div className='home_ctn'>
      <Header/>
      <Modal style={{fontFamily: 'PingFang'}} width={'800px'}
          title="更多设置" 
          open={demoOpen >= 0} 
          onCancel={handleDemoCancel}
          footer={null}>
          <Steps current={currentDemo} items={[{title: '步骤一'}, {title: '步骤二'}, {title: '步骤三'}]} style={{fontFamily: 'PingFang'}}/>
            <div style={{ marginTop: 24 }}>
              {currentDemo === 0 && (
                <div>
                  <Row justify="space-around" align="middle">
                    <div className='demo_img_ctn'>
                      <img className='demo_img' src={(demoOpen >= 0)?demo[demoOpen].images[currentDemo].step:""}/>
                    </div>
                  </Row>
                  <br/><br/>
                  <Row>
                    <Button onClick={() => next()} style={{fontFamily: 'PingFang'}}>
                      下一步
                    </Button>
                  </Row>
                </div>
              )}
              {currentDemo === 1 && (
                <div>
                  <Row justify="space-around" align="middle">
                    <div className='demo_img_ctn'>
                      <img className='demo_img' src={(demoOpen >= 0)?demo[demoOpen].images[currentDemo].step:""}/>
                    </div>
                  </Row>
                  <br/><br/>
                  <Row>
                    <Col span={2}>
                      <Button onClick={() => prev()} style={{fontFamily: 'PingFang'}}>
                        上一步
                      </Button>
                    </Col>
                    <Col offset={2} span={2}>
                      <Button onClick={() => next()} style={{fontFamily: 'PingFang'}}>
                        下一步
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
              {currentDemo === 2 && (
                <div>
                  <Row justify="space-around" align="middle">
                    <div className='demo_img_ctn'>
                      <img className='demo_img' src={(demoOpen >= 0)?demo[demoOpen].images[currentDemo].step:""}/>
                    </div>
                  </Row>
                  <br/><br/>
                  <Row>
                    <Col span={4}>
                      <Button style={{ margin: '0 8px', fontFamily: 'PingFang' }} onClick={() => prev()}>
                        上一步
                      </Button>
                    </Col>
                    <Col offset={18} span={2}>
                      <Button key="submit" type="primary" onClick={handleDemoOk} style={{fontFamily: 'PingFang'}}>
                        好的
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
        </Modal>
      {contextHolder}
      <div className='home_core_ctn'>
        <Card hoverable onClick={showModal}>
          <p style={{fontSize:'20px', fontFamily:'PingFang', margin:'0px'}}><PlusOutlined/> 新建项目</p>
          </Card>
        <Modal style={{fontFamily: 'PingFang'}}
        title="新建项目" 
        open={isModalOpen} 
        onCancel={handleCancel}
        footer={[
        <Button key="submit" type="primary"  onClick={handleOk}>
          开始
        </Button>]}>
          <Row align="middle" justify={'space-between'}>
            <Col span={4}><p style={{fontFamily: 'PingFang', fontSize: '16px'}}>项目名称</p></Col>
            <Col span={20}><Input placeholder='demo' style={{fontFamily: 'PingFang'}} onChange={(e)=>setProjectName(e.target.value)}></Input></Col>
          </Row>
        </Modal>
        <p style={{fontSize:'20px', fontFamily:'PingFang', margin:'0px'}}>设计案例</p>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={demo}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable onClick={()=>{showDemo(item.id)}}>
                <p style={{fontFamily: 'PingFang', fontSize: '20px'}}>{item.title}</p>
                <p style={{fontFamily: 'PingFang', fontSize: '16px'}}>{item.content}</p>
              </Card>
            </List.Item>
        )}/>
        <p style={{fontSize:'20px', fontFamily:'PingFang', margin:'0px'}}>历史项目</p>
        <List
          className='history_list'
          grid={{ gutter: 16, column: 6 }}
          dataSource={projects}
          pagination={{
            pageSize: 6,
          }}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable bordered={false} cover={<img src={item.image}/>} onClick={()=>enterProject(item)}>
                <Row justify={'center'} gutter={30}>
                  <p style={{fontFamily: 'PingFang', fontSize: '20px', margin: '8px', textAlign: 'center'}}>{item.name}</p>  
                </Row>
              </Card>
            </List.Item>
        )}/>
      </div>
    </div>
    </ConfigProvider>
  )
}

export default index