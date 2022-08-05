// import { createStore } from "redux";
// 方法已废弃，使用configureStore替代
import { configureStore } from '@reduxjs/toolkit';
import test from './reducer';

const store = configureStore({ reducer: { test } });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments:
// CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
