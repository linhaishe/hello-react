import { useCallback, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAsync } from './use-async';
import { Project } from '../screens/project-list/list';
import { cleanObject } from './index';
import { useHttp } from './http';

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  // const { run, ...result } = useAsync<Project[]>();
  // // The 'fetchPeojects' function makes the dependencies of useEffect Hook (at line 14) change on every render.
  // const fetchPeojects = useCallback(() => client('projects', { data: cleanObject(param || {}) }), [client, param]);
  //
  // useEffect(() => {
  //   run(fetchPeojects(), { retry: fetchPeojects });
  // }, [param, fetchPeojects, run]);
  //
  // return result;

  // useQuery第一个参数接受tuple，当param变化的时候，useQuery就会触发
  // 这里用useQuery获取useProject 更多是useAsync的角色
  return useQuery<Project[], Error>(['projects', param], () => client('projects', { data: param }));
};

export const useEditProject = () => {
  const client = useHttp();
  const queryClient = useQueryClient();

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    },
  );
};

export const useAddProject = () => {
  const client = useHttp();
  const queryClient = useQueryClient();

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects`, {
        method: 'POST',
        data: params,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    },
  );
};

export const useProjects = (id?: number) => {
  const client = useHttp();
  // !!id === Boolean(id)
  return useQuery<Project>(['project', { id }], () => client(`projects/${id}`), { enabled: Boolean(id) });
};
