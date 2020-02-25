
import { createStore } from "redux";
import { counter } from "./reducers";

// 根据counter函数创建store对象
//内部会第一次调用reducer函数得到初始state
//store对象保存着一个初始state，并关联着reducer,即counter
const store = createStore(counter);
console.log(store,store.getState());

export default store;