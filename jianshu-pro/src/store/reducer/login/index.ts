import { LoginType } from './model';
import { Action } from '../../actions/login';

const initialValue: LoginType = {
  isLogin: false,
};

const reducer = (state = initialValue, action: Action) => {
  console.log('action', action);
  switch (action.type) {
    case 'get_login_data': {
      return { ...state, isLogin: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
