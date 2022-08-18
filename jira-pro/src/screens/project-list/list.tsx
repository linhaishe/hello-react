import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  lists: Project[];
  users: User[];
}

function List({ lists, users }: ListProps) {
  return (
    <Table
      pagination={false}
      columns={[
        { title: '名称', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
        {
          title: '负责人',
          render(value, project) {
            return <span>{users.find((user) => user.id === project.personId)?.name || '未知'}</span>;
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
