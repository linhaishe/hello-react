import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUrlQueryParam } from '../../utils/url';
import { useProject } from '../../utils/project';

export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);

  return [useMemo(() => ({ ...param, personId: Number(param.personId) || undefined }), [param]), setParam] as const;
};

export const useProjectsQueryKey = () => {
  const [param] = useProjectSearchParams();
  return ['projects', param];
};

export const useProjectModal = () => {
  const [{ editProjectId }, setEditingProjectId] = useUrlQueryParam(['editProjectId']);
  const { data: editingProject, isLoading } = useProject(Number(editProjectId));
  const startEdit = (id: number) => setEditingProjectId({ editProjectId: id });

  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam(['projectCreate']);
  const open = () => setProjectCreate({ projectCreate: true });
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [_, setUrlParams] = useSearchParams();
  // const close = () => {
  //   setProjectCreate({ projectCreate: undefined });
  //   setEditingProjectId({ editProjectId: undefined });
  // };
  const close = () => setUrlParams({ projectCreate: '', editingProjectId: '' });

  // 这里返回的是 tuple,像setState样，可以自己随意命名，固定了顺序
  // return [projectCreate === 'true', open, close] as const;

  // 不用纠结顺序，但是名字是被固定了
  return {
    projectModalOpen: projectCreate === 'true' || Boolean(editingProject),
    open,
    close,
    startEdit,
    editingProject,
    isLoading,
  };
};

// const useTest = () => {
//   // 通过定义好的tuple就可以拿到值，但仅针对2，3个数据返回使用tuple，多的话可以使用对象返回。
//   const [created, openXX, closeX] = useProjectModal();
//   const [a, setA] = useState();
// };
