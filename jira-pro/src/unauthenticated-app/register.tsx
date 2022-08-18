import React from 'react';
import { Form, Button, Input } from 'antd';
import { useAuth } from '../context/auth-context';

function RegisterScreen() {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label='Username'>
        <Form.Item name='username'>
          <Input type='text' id='username' />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Password'>
        <Form.Item name='password'>
          <Input type='password' id='username' />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterScreen;
