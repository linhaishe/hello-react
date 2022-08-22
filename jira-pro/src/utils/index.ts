import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) => value === undefined || value === null || value === '';
// let a: object; // 对象有很多种形式
// a = { name: 'jack' };
// a = () => {};
// a = new RegExp('');
// object: { [key: string]: unknown } 将类型限制为键值对类型
// 在一个函数里，改变传入的对象本身是不好的。
export function cleanObject(object: { [key: string]: unknown }) {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // 0
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });

  return result;
}

// custom hook 需要用use开头，hook的使用地方需要注意，需要在component中
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// debounce
// const debounce = (func: any, delay: number) => {
//   let timeout: any;
//   return (...param: any) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//
//     timeout = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounce] = useState(value);

  useEffect(() => {
    // 每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebounce(value), delay);
    // 每次在上一个useEffect处理完以后运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
