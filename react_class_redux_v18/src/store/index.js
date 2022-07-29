// import { createStore } from "redux";
// 方法已废弃，使用configureStore替代

import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./reducer";

const store = configureStore({ reducer: { todolistReducer } });

export default store;
