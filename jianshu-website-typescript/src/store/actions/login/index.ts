interface LoginData {
  type: 'get_login_data';
  payload: boolean;
}

export type Action = LoginData;
