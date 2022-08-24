// 一个工程分为两个app, 一个是登入状态的，一个是非登入状态的。
import React from 'react';
import styled from '@emotion/styled';
// 使得svg图片能以svg的格式进行展现，不使用img标签
import { Dropdown, Menu, Button } from 'antd';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg';
import ProjectListScreens from './screens/project-list';
import { useAuth } from './context/auth-context';
import { Row } from './components/libs';
import ProjectDetail from './screens/project';
import { resetRoute } from './utils';

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  //height: calc(100vh - 6rem);
`;

function PageHeader() {
  const { logout, user } = useAuth();

  return (
    <Header between>
      <HeaderLeft gap>
        <Button
          type='link'
          onClick={resetRoute}
        >
          <SoftwareLogo
            width='18rem'
            color='rgb(38,132,255)'
          />
        </Button>
        <h2>logo</h2>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Button
                  type='link'
                  onClick={logout}
                >
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button onClick={(e) => e.preventDefault()}> Hi, {user?.name}</Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
}

export default function AuthenticatedApp() {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Routes>
          <Route
            path='/projects'
            element={<ProjectListScreens />}
          />
          <Route
            path='/projects/:projectId/*'
            element={<ProjectDetail />}
          />
          <Route
            path='/'
            element={<Navigate to='/projects' />}
          />
          {/* <Navigate to='/projects' /> */}
        </Routes>
      </Main>
    </Container>
  );
}
