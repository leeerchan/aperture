import React from 'react';
import {Layout, Menu, Button, Row, Col, ConfigProvider } from 'antd';
import { history} from 'umi';
const { Header, Content, Footer } = Layout;

import './index.less';
import MyTheme from '../assets/MyTheme';

const authenticate = () => {
  let token = localStorage.getItem('token');
  //console.log('auth: ', token);
  return (token!=="" && token) ? true : false
}

const startDesign = () => {
  //console.log(authenticate());
  if (authenticate()) {
    history.push('./home');
  }
  else {
    history.push('/login');
  }
}

const index = () => {
  return (
    <ConfigProvider
    theme={MyTheme}
    >
      <Layout className="layout">
        <Header style={{background: 'white'}}>
          <Row justify='end'>
            <Col>
              <Button type="primary" onClick={startDesign}>开始设计</Button>
            </Col>
          </Row>
        </Header>
        <Content style={{background: 'white'}}>
          <div className="site-layout-content">
            <img src={"https://s2.loli.net/2023/04/04/tiTPImQnVDEb1p3.jpg"}/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center', background: 'white'}}>Aperture Design ©2023 Created by IABC lab</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default index;
