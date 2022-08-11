import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import homeReducer from './homeReducer';
import detailsReducer from './detailsReducer';

const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailsReducer,
});

export default reducers;
