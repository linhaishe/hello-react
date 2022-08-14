interface IsFocus {
  type: 'isFocus';
  payload: boolean;
}

interface TopSearchList {
  type: 'change_list';
  payload: string[];
}

export type Action = IsFocus | TopSearchList;
