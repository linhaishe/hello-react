import { useEffect } from 'react';
import { useAsync } from './use-async';
import { Project } from '../screens/project-list/list';
import { cleanObject } from './index';
import { useHttp } from './http';

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  const fetchPeojects = () => client('projects', { data: cleanObject(param || {}) });

  useEffect(() => {
    run(fetchPeojects(), { retry: fetchPeojects });
  }, [param]);

  return result;
};

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) =>
    run(
      client(`projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    );

  return {
    mutate,
    ...asyncResult,
  };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) =>
    run(
      client(`projects/${params.id}`, {
        data: params,
        method: 'POST',
      }),
    );

  return {
    mutate,
    ...asyncResult,
  };
};
