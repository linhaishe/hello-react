import { QueryKey, useMutation, useQuery, useQueryClient } from 'react-query';
import { useHttp } from './http';
import { useAddConfig, useDeleteConfig, useEditConfig } from './use-optimistic-options';
import { Project } from '../types/project';

export const useProjects = (param?: Partial<Project>) => {
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

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  // const queryClient = useQueryClient();
  // const [searchParams] = useProjectSearchParams();
  // const queryKey = ['projects', searchParams];

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    useEditConfig(queryKey),
    // {
    // onSuccess: () => queryClient.invalidateQueries(queryKey),
    // async onMutate(target) {
    //   const previousItems = queryClient.getQueryData(queryKey);
    //   // ts error notice 删除map后的[]
    //   queryClient.setQueryData(
    //     queryKey,
    //     (old?: Project[]) =>
    //       old?.map((project) => (project.id === target.id ? { ...project, ...target } : project)) || [],
    //   );
    //
    //   return { previousItems };
    // },
    // // 操作没成功的时候，需要一个回滚机制
    // onError(error, newItem, context) {
    //   queryClient.setQueryData(queryKey, (context as { previousItems: Project[] }).previousItems);
    // },
    // },
  );
};

export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp();
  // const queryClient = useQueryClient();

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects`, {
        method: 'POST',
        data: params,
      }),
    useAddConfig(queryKey),
  );
};

export const useDeleteProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`projects/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey),
  );
};

export const useProject = (id?: number) => {
  const client = useHttp();
  // !!id === Boolean(id)
  return useQuery<Project>(['project', { id }], () => client(`projects/${id}`), { enabled: Boolean(id) });
};
