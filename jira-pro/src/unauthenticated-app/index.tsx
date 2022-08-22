import React, { useState } from 'react';
import { Button, Card, Divider } from 'antd';
import styled from '@emotion/styled';
// eslint-disable-next-line import/no-cycle
import RegisterScreen from './register';
// eslint-disable-next-line import/no-cycle
import LoginScreen from './login';
import logo from '../assets/logo.svg';
import right from '../assets/right.svg';
import left from '../assets/left.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

export const LongButton = styled(Button)`
  width: 100%;
`;

export default function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <Button type='link' onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有帐号了？直接登录' : '已经有帐号了？注册新账号'}
        </Button>
      </ShadowCard>
    </Container>
  );
}
