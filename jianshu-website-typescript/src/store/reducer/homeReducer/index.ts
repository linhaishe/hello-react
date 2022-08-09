import { Action } from '../../actions/homeActions';
import { HomeDataType } from './model';

const initialValue: HomeDataType = {
  topicList: [],
  articleLists: [],
  bannerPics: [],
};

const reducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case 'get_home_data': {
      console.log('888', action.payload);
      return {
        ...state,
        topicList: action.payload.topicList,
        articleLists: action.payload.articleLists,
        bannerPics: action.payload.bannerPics,
      };
    }
    default:
      return state;
  }
};

export default reducer;
