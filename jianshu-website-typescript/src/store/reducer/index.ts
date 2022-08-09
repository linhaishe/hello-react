import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import homeReducer from './homeReducer';

const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer,
});

export default reducers;
