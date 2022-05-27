import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './components/Dashboard/Home';
import Login from './components/Login/Login';
import Todo from './components/Todo/Todo';

function App() {
  // const user = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Home />} path='/dashboard' />
        <Route element={<Todo />} path='/todo' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
