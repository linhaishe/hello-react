import { PayloadAction } from '@reduxjs/toolkit';

interface RootState {
  isOn: boolean;
}

const initialValue = {
  isFocused: false,
};

export default (state = initialValue, action: RootState) => {
  switch (action.type) {
    case 'FOCUS': {
      const stateCopy = !state.isFocused;
      return { ...state, isFocused: stateCopy };
      break;
    }
    default:
      return state;
  }
};
