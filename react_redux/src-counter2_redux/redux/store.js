/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from "redux";

//引入为Counter组件服务的reducer
import { counter } from "./reducers";

// 根据counter函数创建store对象
//内部会第一次调用reducer函数得到初始state
//store对象保存着一个初始state，并关联着reducer,即counter
const store = createStore(counter);
console.log(store, store.getState());

export default store;
