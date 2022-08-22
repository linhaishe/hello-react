import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  lists: Project[];
  users: User[];
}

function List({ lists, users }: ListProps) {
  return (
    <Table
      rowKey={(record) => record.id}
      pagination={false}
      columns={[
        { title: '名称', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
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
            return <span>{project.created ? dayjs(project.created).format('YYYY_MM_DD') : '无'}</span>;
          },
        },
      ]}
      dataSource={lists}
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
