/*
根据老的state和指定action, 处理返回一个新的state
1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
 */

//包含n个reducer函数的模块
import { INCREMENT, DECREMENT } from "./action-types";

//别写default
//state = 0 , 形参默认值,当pre
//因为reducer可以使状态初始化，所以初始化状态的时候reducer会传一个undefine，为了避免undefine所以需要将初始值设置为默认0
export function counter(state = 0, action) {
  console.log("counter", state, action);
  //根据type决定如何加工数据
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
