import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { User } from './search-panel';

export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}
// listProps 由两部分类型组成，TableProps + users
interface ListProps extends TableProps<Project> {
  // 因为继承了TableProps，且传入了Project类型，lists: Project[];这个属性可以不用写入，删除即可
  // lists: Project[];
  users: User[];
}
// ...props 的类型为 type PropsType = Omit<ListProps, 'users'>
function List({ users, ...props }: ListProps) {
  return (
    <Table
      rowKey={(record) => record.id}
      pagination={false}
      columns={[
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
