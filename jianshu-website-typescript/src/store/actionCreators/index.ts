import { Dispatch } from 'redux';
import axios from 'axios';

export const searchInputFocus = (isFocus: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'isFocus',
      payload: isFocus,
    });
  };
};

const changeList = (data: string[]) => {
  return {
    type: 'change_list',
    payload: data,
  };
};

export const getTopSearchListforReducer = () => {
  return (dispatch: Dispatch) => {
    axios
      .get('/topSearchList')
      .then((res) => {
        console.log('999', res);
        dispatch(changeList(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};
