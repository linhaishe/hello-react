import { configureStore } from '@reduxjs/toolkit';
import { projectListsSlice } from '../screens/project-list/project-list.slice';

export const rootReducer = {
  projectList: projectListsSlice.reducer,
};

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
