import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
