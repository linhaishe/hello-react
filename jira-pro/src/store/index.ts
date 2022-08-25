import { configureStore } from '@reduxjs/toolkit';
import { projectListsSlice } from '../screens/project-list/project-list.slice';
import { authSlice } from './auth.slice';

export const rootReducer = {
  projectList: projectListsSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
