import React from 'react';
import { Form, Button, Input } from 'antd';
import { useAuth } from '../context/auth-context';
// eslint-disable-next-line import/no-cycle
import { LongButton } from './index';
import { useAsync } from '../utils/use-async';

function RegisterScreen({ onError }: { onError: (error: Error) => void }) {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async ({ cpassword, ...values }: { username: string; password: string; cpassword: string }) => {
    if (cpassword !== values.password) {
      onError(new Error('请确认两次输入的密码相同'));
      return;
    }
    // register(values).catch((e: Error) => onError(e));
    try {
      await run(register(values));
    } catch (e: unknown) {
      onError(e as Error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label='Username'>
        <Form.Item name='username'>
          <Input type='text' id='username' placeholder='请输入用户名' />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Password'>
        <Form.Item name='password'>
          <Input type='password' id='password' placeholder='请输入密码' />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Password'>
        <Form.Item name='cpassword'>
          <Input type='password' id='cpassword' placeholder='请确认密码' />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type='primary' htmlType='submit'>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}

export default RegisterScreen;
