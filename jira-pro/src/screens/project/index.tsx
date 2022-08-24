import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Kanban from '../kanban';
import Epic from '../epic';

function ProjectDetail() {
  return (
    <div>
      <h1>ProjectDetail</h1>
      {/* 加上/表示根路由 */}
      {/* <Link to='/kanban'>看板</Link> */}
      <Link to='kanban'>看板</Link>
      <Link to='epic'>任务组</Link>
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
          element={<Navigate to={`${window.location.pathname}/kanban`} />}
        />
      </Routes>
    </div>
  );
}

export default ProjectDetail;
