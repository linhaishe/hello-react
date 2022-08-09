import { Action } from '../../actions/headerActions';

const initialValue = {
  isFocused: false,
  listforReducer: [],
};

const reducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case 'isFocus': {
      return { ...state, isFocused: action.payload };
    }
    case 'change_list': {
      return { ...state, listforReducer: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
