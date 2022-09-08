import { QueryKey, useMutation, useQuery } from 'react-query';
import { useHttp } from './http';
import { Kanban } from '../types/kanban';
import { useAddConfig, useDeleteConfig, useReorderConfig } from './use-optimistic-options';

export const useKanbans = (param?: Partial<Kanban>) => {
  const client = useHttp();

  return useQuery<Kanban[], Error>(['kanbans', param], () => client('kanbans', { data: param }));
};

export const useAddKanban = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Kanban>) =>
      client(`kanbans`, {
        method: 'POST',
        data: params,
      }),
    useAddConfig(queryKey),
  );
};

export const useDeleteKanban = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`kanbans/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey),
  );
};

export interface SortProps {
  // 要重新排序的 item
  fromId: number;
  // 目标item
  referenceId: number;
  // 放在目标item的前还是后
  type: 'before' | 'after';
  fromKanbanId?: number;
  toKanbanId?: number;
}

// 看板拖拽持久化
export const useReorderKanban = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: SortProps) =>
      client('kanbans/reorder', {
        data: params,
        method: 'POST',
      }),
    useReorderConfig(queryKey),
  );
};
