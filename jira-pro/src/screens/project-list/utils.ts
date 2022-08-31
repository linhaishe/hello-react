import { useMemo, useState } from 'react';
import { useUrlQueryParam } from '../../utils/url';

export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);

  return [useMemo(() => ({ ...param, personId: Number(param.personId) || undefined }), [param]), setParam] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam(['projectCreate']);
  const open = () => setProjectCreate({ projectCreate: true });
  const close = () => setProjectCreate({ projectCreate: undefined });

  // 这里返回的是 tuple,像setState样，可以自己随意命名，固定了顺序
  // return [projectCreate === 'true', open, close] as const;

  // 不用纠结顺序，但是名字是被固定了
  return {
    projectModalOpen: projectCreate === 'true',
    open,
    close,
  };
};

// const useTest = () => {
//   // 通过定义好的tuple就可以拿到值，但仅针对2，3个数据返回使用tuple，多的话可以使用对象返回。
//   const [created, openXX, closeX] = useProjectModal();
//   const [a, setA] = useState();
// };
