import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableProps, Dropdown, Menu } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { User } from './search-panel';
import Pin from '../../components/pin';
// eslint-disable-next-line import/no-cycle
import { useEditProject } from '../../utils/project';
import { ButtonNoPadding } from '../../components/libs';
import { useProjectModal } from './utils';

export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}
// listProps 由两部分类型组成，TableProps + users
interface ListProps extends TableProps<Project> {
  // 因为继承了TableProps，且传入了Project类型，lists: Project[];这个属性可以不用写入，删除即可
  // lists: Project[];
  users: User[];
  reFresh?: () => void;
}
// ...props 的类型为 type PropsType = Omit<ListProps, 'users'>
function List({ users, ...props }: ListProps) {
  const { open } = useProjectModal();
  const { mutate } = useEditProject();
  // 柯里化 point free
  // pinProject需要两个参数，但是两个参数的接受时间会是不一样的;projectid在组件渲染的时候就已经知道了，但是pin是在projectid渲染后才拿到的
  // const pinProject = (id: number, pin: boolean) => mutate({ id, pin });
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin }).then(props.reFresh);
  return (
    <Table
      rowKey={(record) => record.id}
      pagination={false}
      columns={[
        {
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
          title: '名称',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
        },
        { title: '部门', dataIndex: 'organization' },
        {
          title: '负责人',
          render(value, project) {
            return <span>{users.find((user) => user.id === project.personId)?.name || '未知'}</span>;
          },
        },
        {
          title: '创建时间',
          render(value, project) {
            return <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}</span>;
          },
        },
        {
          render(value, project) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key='edit'>
                      <ButtonNoPadding
                        onClick={open}
                        type='link'
                      >
                        编辑
                      </ButtonNoPadding>
                    </Menu.Item>
                  </Menu>
                }
              >
                <ButtonNoPadding type='link'>...</ButtonNoPadding>
              </Dropdown>
            );
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
