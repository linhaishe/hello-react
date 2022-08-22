import { useEffect } from 'react';
import { useAsync } from './use-async';
import { Project } from '../screens/project-list/list';
import { cleanObject } from './index';
import { useHttp } from './http';

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
