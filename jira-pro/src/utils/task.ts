import { QueryKey, useMutation, useQuery } from 'react-query';
import { useHttp } from './http';
import { Task } from '../types/task';
import { useAddConfig, useDeleteConfig, useEditConfig, useReorderTaskConfig } from './use-optimistic-options';
import { SortProps } from './kanban';

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();

  return useQuery<Task[], Error>(['tasks', param], () => client('tasks', { data: param }));
};

export const useAddTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks`, {
        method: 'POST',
        data: params,
      }),
    useAddConfig(queryKey),
  );
};

// 获取task详情
export const useTask = (id?: number) => {
  const client = useHttp();

  return useQuery<Task, Error>(['tasks', { id }], () => client(`tasks/${id}`), { enabled: Boolean(id) });
};

export const useEditTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    useEditConfig(queryKey),
  );
};

export const useDeleteTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`tasks/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey),
  );
};

// 任务拖拽持久化
export const useReorderTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: SortProps) =>
      client('tasks/reorder', {
        data: params,
        method: 'POST',
      }),
    useReorderTaskConfig(queryKey),
  );
};
