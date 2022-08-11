import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import homeReducer from './homeReducer';
import detailsReducer from './detailsReducer';
import loginReducer from './login';

const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailsReducer,
  login: loginReducer,
});

export default reducers;
