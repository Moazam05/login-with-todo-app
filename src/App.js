import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Dashboard/Home';
import Login from './components/Login/Login';
import CreateTodo from './components/Todo/CreateTodo';
import EditTodo from './components/Todo/EditTodo';

function App() {
  // const user = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Home />} path='/dashboard' />
        <Route element={<CreateTodo />} path='/create-todo' />
        <Route path='dashboard/update-todo/:id' element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
