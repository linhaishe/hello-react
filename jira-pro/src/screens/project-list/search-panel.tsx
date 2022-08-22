/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from 'antd';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (param: SearchPanelProps['params']) => void;
}

function SearchPanel({ users, params, setParams }: SearchPanelProps) {
  return (
    <Form layout='inline' css={{ marginBottom: '2rem' }}>
      {/* setParams(Object.assign({}, params, { name:evt.target.value })) */}
      <Form.Item>
        <Input
          type='text'
          placeholder='项目名'
          value={params.name}
          onChange={(evt) => {
            setParams({
              ...params,
              name: evt.target.value,
            });
          }}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={params.personId}
          onChange={(value) => {
            setParams({
              ...params,
              personId: value,
            });
          }}
        >
          <Select.Option value=''>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}

SearchPanel.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
    personId: PropTypes.string,
  }),
  setParams: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default SearchPanel;
