import { HomeDataType } from '../../reducer/homeReducer/model';

interface HomeData {
  type: 'get_home_data';
  payload: HomeDataType;
}

export type Action = HomeData;
