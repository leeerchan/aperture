import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Tabs, Row, Col, message } from 'antd';
import { history, useLocation} from 'umi';
import PubSub from "pubsub-js";
import cookie from 'react-cookies';

import {userLogin} from '@/services/requestList'
import styles from './index.less';
import setAuthToken from '@/utils/setAuthToken';


const index = () => {
  const location: any = useLocation();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (location) {
      if (location.state?.register) {
        messageApi.success("注册成功，请登录");
      }
    }
  }, []);

  const onFinish = async(values: any) => {
    const res = await userLogin(values.email, values.password);
    localStorage.setItem('token', res.data.token);
    setAuthToken(res.data.token);
    if (res.data.result === 0) {
      history.push('/home', {isLogin: true});
    }
    else if (res.data.result === 402) {
      messageApi.error("邮箱或密码错误");
    }
  };

  return (
    <div className={styles.bg}>
      <br/><br/><br/><br/><br/><br/>
      <div className={styles.login_card}>
        <p style={{fontFamily: 'PingFang', fontSize: '20px', color: 'var(--color-theme)'}}>登 录</p>
        <br/>
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱' }]}
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <Input 
              placeholder="邮箱" 
              bordered={false} 
              style={{fontFamily: 'PingFang', fontSize: '16px'}}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <Input
              bordered={false}
              type="password"
              placeholder="密码"
              style={{fontFamily: 'PingFang', fontSize: '16px'}}
            />
          </Form.Item>
          <br/>
          <Form.Item>
            {contextHolder}
            <Button type="primary" htmlType="submit" block style={{ fontFamily: 'PingFang', fontSize: '20px', height: '50px' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
        <a style={{ color: '#8C8D9B', fontFamily: 'PingFang', fontSize: '16px'}} href="/register">没有账号？立即注册！</a>
      </div>    
    </div>
  )
}

export default index
