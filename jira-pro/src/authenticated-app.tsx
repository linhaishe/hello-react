// 一个工程分为两个app, 一个是登入状态的，一个是非登入状态的。
import React from 'react';
import styled from '@emotion/styled';
import ProjectListScreens from './screens/project-list';
import { useAuth } from './context/auth-context';
import { Row } from './components/libs';

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  //height: calc(100vh - 6rem);
`;

export default function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between>
        <HeaderLeft gap>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button type='button' onClick={logout}>
            登出
          </button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreens />
      </Main>
    </Container>
  );
}
