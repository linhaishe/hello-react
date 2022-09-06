import { useLocation } from 'react-router';
import { useMemo } from 'react';
import { useProject } from '../../utils/project';
import { useKanbans } from '../../utils/kanban';
import { useTasks } from '../../utils/task';
import { useUrlQueryParam } from '../../utils/url';

// 获取地址栏里的项目id
export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];

  return Number(id);
};

// 请求获取项目id
export const useProjectInUrl = () => useProject(useProjectIdInUrl());

export const useKanbansInProject = () => useKanbans({ projectId: useProjectIdInUrl() });
export const useKanbansSearchParams = () => ({ projectId: useProjectIdInUrl() });

export const useTasksInProject = () => useTasks({ projectId: useProjectIdInUrl() });
export const useKanbansQueryKey = () => ['kanbans', useKanbansSearchParams()];

export const useTasksSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'typeId', 'processorId', 'tagId']);
  const projectId = useProjectIdInUrl();

  return useMemo(
    () => ({
      projectId,
      typeId: Number(param.typeId) || undefined,
      processorId: Number(param.processorId) || undefined,
      tagId: Number(param.tagId) || undefined,
      name: param.name,
    }),
    [projectId, param],
  );
};
export const useTasksQueryKey = () => ['tasks', useTasksSearchParams()];
