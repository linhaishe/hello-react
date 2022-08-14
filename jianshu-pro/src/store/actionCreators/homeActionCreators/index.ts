import { Dispatch } from 'redux';
import axios from 'axios';
import { HomeDataType } from '../../reducer/homeReducer/model';

const getHomeData = (data: HomeDataType) => {
  return {
    type: 'get_home_data',
    payload: data,
  };
};

export const getHomeDataList = () => {
  return (dispatch: Dispatch) => {
    axios
      .get('/home')
      .then((res) => {
        dispatch(getHomeData(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};

export default getHomeDataList;
