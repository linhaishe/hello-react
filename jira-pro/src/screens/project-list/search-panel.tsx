/** @jsxImportSource @emotion/react */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import UserSelect from '../../components/user-select';
import { Project } from '../../types/project';
import { User } from '../../types/user';

interface SearchPanelProps {
  users: User[];
  params: Partial<Pick<Project, 'name' | 'personId'>>;
  setParams: (param: SearchPanelProps['params']) => void;
}

function SearchPanel({ users, params, setParams }: SearchPanelProps) {
  return (
    <Form
      layout='inline'
      css={{ marginBottom: '2rem' }}
    >
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
        <UserSelect
          defaultOptionName='负责人'
          value={params.personId}
          onChange={(value) => {
            setParams({
              ...params,
              personId: value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
}

SearchPanel.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
    personId: PropTypes.number,
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
