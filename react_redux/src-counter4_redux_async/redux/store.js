import React from "react";
import { createStore, applyMiddleware } from "redux";
//用于支持异步action
import thunk from "redux-thunk";
//引入扩展插件chrome插件
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

// 根据counter函数创建store对象
export default createStore(
  reducers,
  //composeWithDevTools再将其包裹起来
  composeWithDevTools(applyMiddleware(thunk))
  // 应用上异步中间件
);
