import { Form, Input, Button, message, Modal } from 'antd';
import React, {useState} from 'react';
import { history, useLocation} from 'umi';

import {registerUser} from '@/services/requestList'
import styles from './index.less';
import { duration } from 'html2canvas/dist/types/css/property-descriptors/duration';


const index = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async(values: any) => {
    if (values['password'] !== values['confirmPassword']) {
      messageApi.error("两次输入的密码不符");
    }
    else {
      const res = await registerUser(values.email, values.password);
      if (res.data.code === "500") {
        history.push('/login', {register: true});
      }
      else if (res.data.code === "401") {
        messageApi.error("邮箱已被注册");
      }
    }
  }

  return (
    <div className={styles.bg}>
      <br/><br/><br/><br/><br/><br/>
      <div className={styles.register_card}>
        <p style={{fontFamily: 'PingFang', fontSize: '20px', color: 'var(--color-theme)'}}>注 册</p>
        <br/>
        <Form
          name="register"
          className="register-form"
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
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: '请确认密码' }]}
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <Input
              bordered={false}
              type="password"
              placeholder="确认密码"
              style={{fontFamily: 'PingFang', fontSize: '16px'}}
            />
          </Form.Item>
          <br/>
          <Form.Item>
            {contextHolder}
            <Button type="primary" htmlType="submit" block style={{ fontFamily: 'PingFang', fontSize: '20px', height: '50px' }}>
              注册
            </Button>
          </Form.Item>
        </Form>
        <a style={{ color: '#8C8D9B', fontFamily: 'PingFang', fontSize: '16px'}} href="/login">已有账号？立即登录！</a>
      </div>    
    </div>
  )
}

export default index
