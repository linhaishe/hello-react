import { useEffect } from 'react';
import { useAsync } from './use-async';
import { cleanObject } from './index';
import { useHttp } from './http';
import { User } from '../types/user';

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client('users', { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
