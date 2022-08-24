import { useCallback, useEffect } from 'react';
import { useAsync } from './use-async';
import { Project } from '../screens/project-list/list';
import { cleanObject } from './index';
import { useHttp } from './http';

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  // The 'fetchPeojects' function makes the dependencies of useEffect Hook (at line 14) change on every render.
  const fetchPeojects = useCallback(() => client('projects', { data: cleanObject(param || {}) }), [client, param]);

  useEffect(() => {
    run(fetchPeojects(), { retry: fetchPeojects });
  }, [param, fetchPeojects, run]);

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
