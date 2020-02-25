import React from "react";
import ReactDOM from "react-dom";
//引入创建store对象的函数
// import { createStore } from "redux";


import App from "./components/app";
import store from "./redux/store";
// import { counter } from "./redux/reducers";

// // 根据counter函数创建store对象
// //内部会第一次调用reducer函数得到初始state
// //store对象保存着一个初始state，并关联着reducer,即counter
// const store = createStore(counter);
// console.log(store,store.getState());


// 定义渲染根组件标签的函数
function render(){
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}


// // 定义渲染根组件标签的函数
// const render = () => {
//   //传递store,store内存储的状态进行传递
//   ReactDOM.render(<App store={store} />, document.getElementById("root"));
// };


// 初始化渲染
render();

// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render);

// store.subscribe(function(){
//   ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// })
