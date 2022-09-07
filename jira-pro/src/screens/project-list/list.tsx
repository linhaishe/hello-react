import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Menu, Modal, Table, TableProps } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Pin from '../../components/pin';
// eslint-disable-next-line import/no-cycle
import { useDeleteProject, useEditProject } from '../../utils/project';
import { ButtonNoPadding } from '../../components/libs';
import { useProjectModal, useProjectsQueryKey } from './utils';
import { Project } from '../../types/project';
import { User } from '../../types/user';

// listProps 由两部分类型组成，TableProps + users
interface ListProps extends TableProps<Project> {
  // 因为继承了TableProps，且传入了Project类型，lists: Project[];这个属性可以不用写入，删除即可
  // lists: Project[];
  users: User[];
}

function More({ project }: { project: Project }) {
  const { startEdit } = useProjectModal();
  const { mutate: deleteProject } = useDeleteProject(useProjectsQueryKey());
  const confirmDelete = (id: number) => {
    Modal.confirm({
      title: '确定删除这个项目吗',
      content: '点击确定删除',
      okText: '确定',
      onOk() {
        deleteProject({ id });
      },
    });
  };

  const onClick = ({ key }: { key: string }) => {
    if (key === 'edit') {
      startEdit(project.id);
    }

    if (key === 'delete') {
      confirmDelete(project.id);
    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: 'edit',
          label: '编辑',
        },
        {
          key: 'delete',
          label: '删除',
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <ButtonNoPadding type='link'>...</ButtonNoPadding>
    </Dropdown>
  );
}

// ...props 的类型为 type PropsType = Omit<ListProps, 'users'>
function List({ users, ...props }: ListProps) {
  const { mutate } = useEditProject(useProjectsQueryKey());
  // 柯里化 point free
  // pinProject需要两个参数，但是两个参数的接受时间会是不一样的;projectid在组件渲染的时候就已经知道了，但是pin是在projectid渲染后才拿到的
  // const pinProject = (id: number, pin: boolean) => mutate({ id, pin });
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin });
  return (
    <Table
      rowKey={(record) => record.id}
      pagination={false}
      columns={[
        {
          key: 'project-collect',
          title: (
            <Pin
              checked
              disabled
            />
          ),
          render(value, project) {
            return (
              <Pin
                checked={project.pin}
                // onCheckedChange={(pin) => mutate({ id: project.id, pin })}
                onCheckedChange={pinProject(project.id)}
              />
            );
          },
        },
        {
          key: 'project-name',
          title: '名称',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
        },
        { key: 'project-organization', title: '部门', dataIndex: 'organization' },
        {
          key: 'project-charger',
          title: '负责人',
          render(value, project) {
            return <span>{users.find((user) => user.id === project.personId)?.name || '未知'}</span>;
          },
        },
        {
          key: 'project-create-time',
          title: '创建时间',
          render(value, project) {
            return <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}</span>;
          },
        },
        {
          render(value, project) {
            return <More project={project} />;
          },
        },
      ]}
      // dataSource={lists}
      {...props}
    />
  );
}

List.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      personId: PropTypes.number,
      organization: PropTypes.string,
      created: PropTypes.number,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default List;
