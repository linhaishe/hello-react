import { Dispatch } from 'redux';
import axios from 'axios';

export const getDetails = () => {
  return (dispatch: Dispatch) => {
    axios
      .get('/detail')
      .then((res) => {
        dispatch({
          type: 'get_content',
          payload: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getDetails555 = () => {
  return 3;
};
