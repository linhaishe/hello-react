import React from 'react';
import { IdSelect } from './id-select';
// eslint-disable-next-line import/no-cycle
import { useUsers } from '../utils/user';

function UserSelect(props: React.ComponentProps<typeof IdSelect>) {
  const { data: users } = useUsers();

  return (
    <IdSelect
      options={users || []}
      {...props}
    />
  );
}

export default UserSelect;
