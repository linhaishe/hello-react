/*
action creator模块
该文件专门为Count组件生成action对象

 */
import { INCREMENT, DECREMENT } from "./action-types";
//incrementCreator
export const increment = (number) => ({ type: INCREMENT, number });
export const decrement = (number) => ({ type: DECREMENT, number });
