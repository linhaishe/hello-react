import React, { useEffect } from 'react';
import { Drawer, Button, Spin, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useProjectModal } from './utils';
import UserSelect from '../../components/user-select';
import { useAddProject, useEditProject } from '../../utils/project';
import { ErrorBox } from '../../components/libs';

function ProjectModal() {
  const { projectModalOpen, close, editingProject, isLoading } = useProjectModal();
  const useMutateProject = editingProject ? useEditProject : useAddProject;

  const { mutateAsync, error, isLoading: mutateLoading } = useMutateProject();
  const [form] = useForm();
  const onFinish = (value: any) => {
    mutateAsync({
      ...editingProject,
      ...value,
    }).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      form.resetFields();
      close();
    });
  };

  const title = editingProject ? '编辑项目' : '创建项目';

  useEffect(() => {
    form.setFieldsValue(editingProject);
  }, [editingProject, form]);

  return (
    <Drawer
      visible={projectModalOpen}
      width='100%'
      onClose={close}
      forceRender
    >
      {isLoading ? (
        <Spin size='large' />
      ) : (
        <>
          <h1>{title}</h1>
          <ErrorBox error={error} />
          <Form
            onFinish={onFinish}
            layout='vertical'
            style={{ width: '40rem' }}
            form={form}
          >
            <Form.Item label='名称'>
              <Form.Item
                name='name'
                rules={[{ required: true, message: '请输入项目名称' }]}
              >
                <Input placeholder='请输入项目名称' />
              </Form.Item>
            </Form.Item>
            <Form.Item label='部门'>
              <Form.Item
                name='organization'
                rules={[{ required: true, message: '请输入部门名' }]}
              >
                <Input placeholder='请输入部门名' />
              </Form.Item>
            </Form.Item>
            <Form.Item
              label='负责人'
              name='personId'
            >
              <UserSelect defaultOptionName='负责人' />
            </Form.Item>
            <Form.Item>
              <Button
                loading={mutateLoading}
                htmlType='submit'
                type='primary'
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </Drawer>
  );
}

export default ProjectModal;
