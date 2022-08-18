import React from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from '../context/auth-context';
import { LongButton } from './index';

function LoginScreen() {
  const { login, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    console.log(1111, values);
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功：用户名：{user?.name}</div> : null}
      <Form.Item label='Username'>
        <Form.Item name='username' rules={[{ required: true, message: '请输入名字' }]}>
          <Input placeholder='用户名' />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Password'>
        <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder='密码' />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <LongButton htmlType='submit' type='primary'>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}

export default LoginScreen;
