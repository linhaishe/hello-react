// 一个工程分为两个app, 一个是登入状态的，一个是非登入状态的。
import React from 'react';
import ProjectList from './screens/project-list';
import { useAuth } from './context/auth-context';

export default function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <div>
      <button type='button' onClick={logout}>
        登出
      </button>
      <ProjectList />
    </div>
  );
}
