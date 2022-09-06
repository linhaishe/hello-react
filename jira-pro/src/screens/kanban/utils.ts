import { useLocation } from 'react-router';
import { useProject } from '../../utils/project';
import { useKanbans } from '../../utils/kanban';
import { useTasks } from '../../utils/task';

// 获取地址栏里的项目id
export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];

  return Number(id);
};

// 请求获取项目id
export const useProjectInUrl = () => useProject(useProjectIdInUrl());

export const useKanbansInProject = () => useKanbans({ projectId: useProjectIdInUrl() });
export const useTasksInProject = () => useTasks({ projectId: useProjectIdInUrl() });

export const useKanbansSearchParams = () => ({ projectId: useProjectIdInUrl() });
export const useKanbansQueryKey = () => ['kanbans', useKanbansSearchParams()];

export const useTasksSearchParams = () => ({ projectId: useProjectIdInUrl() });
export const useTasksQueryKey = () => ['tasks', useTasksSearchParams()];
