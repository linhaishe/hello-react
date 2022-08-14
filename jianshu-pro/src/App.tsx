import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details';
import Login from './pages/login/login';

function App() {
  const { isLogin } = useAppSelector((state) => state.login);
  const headerComponent = () => {
    if (isLogin) {
      return <Header />;
    }
    return null;
  };

  return (
    <div>
      {headerComponent()}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
