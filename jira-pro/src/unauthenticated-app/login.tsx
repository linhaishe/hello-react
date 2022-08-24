import React from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from '../context/auth-context';
// eslint-disable-next-line import/no-cycle
import { LongButton } from './index';
import { useAsync } from '../utils/use-async';

function LoginScreen({ onError }: { onError: (error: Error) => void }) {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async (values: { username: string; password: string }) => {
    // login(values);
    // try catch 中的内容是异步的操作，try中的请求被调用之后，catch就会被直接调用，try中的报错信息catch没有拿到，需要加 async await
    try {
      await run(login(values));
    } catch (e) {
      onError(e as Error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功：用户名：{user?.name}</div> : null}
      <Form.Item label='Username'>
        <Form.Item
          name='username'
          rules={[{ required: true, message: '请输入名字' }]}
        >
          <Input placeholder='用户名' />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Password'>
        <Form.Item
          name='password'
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input placeholder='密码' />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <LongButton
          loading={isLoading}
          htmlType='submit'
          type='primary'
        >
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}

export default LoginScreen;
