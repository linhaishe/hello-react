import React, { useState, useEffect } from 'react';
import { useMount } from '../../utils';

const test = () => {
  let num = 0;

  const effect = () => {
    num += 1;
    const message = `now num = ${num}`;

    return function unmount() {
      console.log(message);
    };
  };

  return effect;
};

// 执行test,返回effect函数
const add2 = test();
// 执行effect函数，返回引用了message1的unmount函数
const unmount = add2();
// 再执行一次effect函数, 返回引用了message2的unmount函数
add2();
// message 3
add2();
// 返回引用了message1的unmount函数
unmount();

export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('num in setInterval:', num);
    }, 1000);

    return () => clearInterval(id);
  }, [num]);

  useEffect(() => {
    console.log(num);
    // 增加依赖值，作用域内才会拿到做新的值
  }, [num]);
};
