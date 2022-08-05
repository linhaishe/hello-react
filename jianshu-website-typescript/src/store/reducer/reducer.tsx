import { Action } from '../actions';

const initialValue = {
  isFocused: false,
};

const reducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case 'isFocus': {
      console.log('here', action);
      return { ...state, isFocused: action.payload };
      break;
    }
    default:
      return state;
  }
};

export default reducer;
