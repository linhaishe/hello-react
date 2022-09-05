import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { cleanObject, subset } from './index';

export const useSetUrlSearchParam = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  return (params: { [key in string]: unknown }) => {
    const o = cleanObject({ ...Object.fromEntries(searchParams), ...params }) as URLSearchParamsInit;
    return setSearchParam(o);
  };
};

/**
 * 返回页面url中，指定键的参数值
 * */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams] = useSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const [stateKeys] = useState(keys);

  return [
    useMemo(
      // () => keys.reduce((prev,key) => ({ ...prev, [key]:searchParams.get(key) || ''}), {} as { [key in K]: string }),
      // [searchParams],

      () =>
        subset(Object.fromEntries(searchParams), stateKeys) as {
          [key in K]: string;
        },
      [searchParams, stateKeys],
    ),
    (params: Partial<{ [key in K]: unknown }>) => setSearchParams(params),
  ] as const;
};

const a = ['jack', 12, { gender: 'male' }] as const;
// keys.reduces会不断创建新的对象，在useEffect中会不断重新调用，造成无限循环
// 基本类型可以放到依赖里；组件状态，可以放到依赖里；非组件状态的对象，绝不可以放到依赖里。
