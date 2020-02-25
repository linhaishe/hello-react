/*
根据老的state和指定action, 处理返回一个新的state
 */

//包含n个reducer函数的模块
import { INCREMENT, DECREMENT } from "./action-types";


//别写default
//state = 0 , 形参默认值
export function counter(state = 0, action) {
  console.log("counter", state, action);
  switch (action.type) {
    case INCREMENT:
      // return state + action.data;
      return state + action.number;
    case DECREMENT:
      return state - action.number;
    default:
      return state;
  }
}
