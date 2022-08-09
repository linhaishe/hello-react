import { Action } from '../actions';

const initialValue = {
  isFocused: false,
  listforReducer: [],
};

const reducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case 'isFocus': {
      return { ...state, isFocused: action.payload };
      break;
    }
    case 'change_list': {
      console.log('here', action);
      return { ...state, listforReducer: action.payload };
      break;
    }
    default:
      return state;
  }
};

export default reducer;
