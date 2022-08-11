import { InitDataType } from '../../reducer/detailsReducer/model';

interface ContentActionType {
  type: 'get_content';
  payload: InitDataType;
}

export type Action = ContentActionType;
