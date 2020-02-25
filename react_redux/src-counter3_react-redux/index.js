import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
//react组件名一般都是大写，小写的一般都是函数
import { Provider } from "react-redux";

import App from "./containers/app";
import { counter } from "./redux/reducers";

// 根据counter函数创建store对象
const store = createStore(counter);

// 定义渲染根组件标签的函数
ReactDOM.render(
  //provider进行管理，store的使用权交给它
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//有了provider之后不再需要监听
