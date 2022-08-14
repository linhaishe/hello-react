import React, { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { Navigate } from 'react-router-dom';
import { Input, LoginBox, LoginWrapper, Button } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as loginActions from '../../store/actionCreators/loginActionCreators';
import { LoginInfoType } from '../../store/reducer/login/model';

export default function Login() {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.login);
  const { loginAction } = bindActionCreators(loginActions, dispatch);
  const accEl = useRef<HTMLInputElement | null>(null);
  const pwdEl = useRef<HTMLInputElement | null>(null);
  const toLoginPage = () => {
    if (accEl.current && pwdEl.current) {
      const userInfo: LoginInfoType = {
        userName: accEl.current?.value,
        pwd: pwdEl.current?.value,
      };
      loginAction(userInfo);
    }
  };

  return (
    <div>
      {isLogin && <Navigate to='/' replace />}
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={accEl} />
          <Input placeholder='密码' ref={pwdEl} />
          <Button onClick={toLoginPage}>登入</Button>
        </LoginBox>
      </LoginWrapper>
    </div>
  );
}
