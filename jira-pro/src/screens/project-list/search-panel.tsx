import React from 'react';
import PropTypes from 'prop-types';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
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
    <div>
      <form>
        {/* setParams(Object.assign({}, params, { name:evt.target.value })) */}
        <input
          type='text'
          value={params.name}
          onChange={(evt) => {
            setParams({
              ...params,
              name: evt.target.value,
            });
          }}
        />
        <select
          value={params.personId}
          onChange={(evt) => {
            setParams({
              ...params,
              personId: evt.target.value,
            });
          }}
        >
          <option value=''>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </form>
    </div>
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
