import React, { useState } from 'react';
import { Card } from 'antd';
import RegisterScreen from './register';
import LoginScreen from './login';

export default function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <button type='button' onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? '登录' : '注册'}
        </button>
      </Card>
    </div>
  );
}
