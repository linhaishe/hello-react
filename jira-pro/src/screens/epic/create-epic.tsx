import React, { useEffect } from 'react';
import { Button, Drawer, Form, Input, Spin } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import styled from '@emotion/styled';
import { useForm } from 'antd/es/form/Form';
import { useAddEpic } from '../../utils/epic';
import { useProjectIdInUrl } from '../kanban/utils';
import { useEpicsQueryKey } from './utils';
import { ErrorBox } from '../../components/libs';

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function CreateEpic(props: Pick<DrawerProps, 'visible'> & { onClose: () => void }) {
  const { mutate: addEpic, isLoading, error } = useAddEpic(useEpicsQueryKey());
  const [form] = useForm();
  const projectId = useProjectIdInUrl();
  const { onClose, visible } = props;

  const onFinish = async (values: any) => {
    await addEpic({ ...values, projectId });
    onClose();
  };

  useEffect(() => {
    form.resetFields();
  }, [form, visible]);

  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      forceRender
      destroyOnClose
      width='100%'
    >
      <Container>
        {isLoading ? (
          <Spin size='large' />
        ) : (
          <>
            <h1>创建任务组</h1>
            <ErrorBox error={error} />
            <Form
              form={form}
              layout='vertical'
              style={{ width: '40rem' }}
              onFinish={onFinish}
            >
              <Form.Item
                label='名称'
                name='name'
                rules={[{ required: true, message: '请输入任务组名' }]}
              >
                <Input placeholder='请输入任务组名称' />
              </Form.Item>

              <Form.Item style={{ textAlign: 'right' }}>
                <Button
                  loading={isLoading}
                  type='primary'
                  htmlType='submit'
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Container>
    </Drawer>
  );
}
