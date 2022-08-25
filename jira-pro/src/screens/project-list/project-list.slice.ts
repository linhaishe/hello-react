// slice 每一个reducer都是一个切片，管状态
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface State {
  projectModalOpen: boolean;
}

const initialState: State = {
  projectModalOpen: false,
};

export const projectListsSlice = createSlice({
  name: 'projectListSlice',
  initialState,
  // 还是纯函数无副作用的
  reducers: {
    // 这里可以直接修改state的状态不通过setstate，因为reduxtoolkit使用了immer处理了数据
    openProjectModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.projectModalOpen = true;
    },
    closeProjectModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.projectModalOpen = false;
    },
  },
});

export const projectListsActions = projectListsSlice.actions;
export const selectProjectModalOpen = (state: RootState) => state.projectList.projectModalOpen;
