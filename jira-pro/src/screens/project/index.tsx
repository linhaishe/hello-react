import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router';
import styled from '@emotion/styled';
import { Menu } from 'antd';
import Kanban from '../kanban';
import Epic from '../epic';

const Aside = styled.aside`
  background-color: rgb(244, 245, 247);
  display: flex;
`;

const Main = styled.div`
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  overflow: hidden;
`;

const useRouteType = () => {
  const units = useLocation().pathname.split('/');
  return units[units.length - 1];
};

const items = [
  {
    key: 'kanban',
    label: <Link to='kanban'>看板</Link>,
  },
  {
    key: 'task',
    label: <Link to='epic'>任务组</Link>,
  },
];

function ProjectDetail() {
  const routeType = useRouteType();

  return (
    <Container>
      <Aside>
        {/* 加上/表示根路由 */}
        {/* <Link to='/kanban'>看板</Link> */}
        <Menu
          mode='inline'
          selectedKeys={[routeType]}
          items={items}
        />
      </Aside>
      <Main>
        <Routes>
          <Route
            path='/kanban'
            element={<Kanban />}
          />
          <Route
            path='/epic'
            element={<Epic />}
          />
          {/* // todo 路有需要优化 不应该是* */}
          <Route
            path='*'
            element={
              <Navigate
                to={`${window.location.pathname}/kanban`}
                replace
              />
            }
          />
        </Routes>
      </Main>
    </Container>
  );
}

export default ProjectDetail;
