/*
action creator模块
 */
import { INCREMENT, DECREMENT } from "./action-types";

//同步action，就是指action的值为Object类型的一般对象

export const increment = (number) => ({ type: INCREMENT, number });
export const decrement = (number) => ({ type: DECREMENT, number });

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。

//同步的action返回一个对象
// 异步action creator(返回一个函数)，因为函数能开启异步任务
export const incrementAsync = (number) => {
  return (dispatch) => {
    //异步的代码
    setTimeout(() => {
      //
      dispatch(increment(number));
    }, 1000);
  };
};
