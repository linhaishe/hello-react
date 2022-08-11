import { Dispatch } from 'redux';
import axios from 'axios';
import { LoginInfoType } from '../../reducer/login/model';

export const loginAction = (userInfo: LoginInfoType) => {
  return (dispatch: Dispatch) => {
    axios
      .post('/login', { data: userInfo })
      .then((res) => {
        console.log('userInfo', res.data.code);

        dispatch({
          type: 'get_login_data',
          payload: Boolean(res.data.code),
        });
      })
      .catch((err) => console.log(err));
  };
};

export const loginAction33 = () => {
  return 3;
};
