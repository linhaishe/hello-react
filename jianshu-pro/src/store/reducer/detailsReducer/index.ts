import { Action } from '../../actions/contentActions';
import { InitDataType } from './model';

const initialValue: InitDataType = {
  title: '',
  imgUrl: '',
  content: '',
};

const reducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case 'get_content': {
      return { ...state, title: action.payload.title, imgUrl: action.payload.imgUrl, content: action.payload.content };
    }
    default:
      return state;
  }
};

export default reducer;
