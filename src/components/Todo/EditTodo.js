import React, { useState } from 'react';
import './CreateTodo.css';

import Navbar from '../Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../features/todoSlice';

const priorityArray = [
  {
    id: 1,
    value: 'High',
  },
  {
    id: 2,
    value: 'Medium',
  },
  { id: 3, value: 'Low' },
];

const EditTodo = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const existingTodos = todos.filter((todo) => todo.id === id);
  const { title, task, priority } = existingTodos[0];

  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateTask, setUpdateTask] = useState(task);
  const [updatePriority, setUpdatePriority] = useState(priority);

  const updateAgenda = () => {
    dispatch(
      updateTodo({
        id: id,
        title: updateTitle,
        task: updateTask,
        priority: updatePriority,
      })
    );
    navigate('/dashboard');
  };

  return (
    <div>
      <Navbar />
      <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-xl-10'>
              <div className='card'>
                <div className='card-body p-5'>
                  <form
                    className='text-center border border-light p-5'
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <p className='h4 mb-4'>Update your Agenda</p>
                    {/* Title */}
                    <input
                      type='text'
                      id='defaultContactFormName'
                      className='form-control mb-4'
                      placeholder='Title'
                      value={updateTitle}
                      onChange={(e) => setUpdateTitle(e.target.value)}
                    />
                    {/* Priority */}
                    <div className='form-group'>
                      <select
                        className='form-control browser-default custom-select mb-4'
                        onChange={(e) => setUpdatePriority(e.target.value)}
                      >
                        <option disabled selected>
                          {updatePriority}
                        </option>
                        {priorityArray.map((item, index) => (
                          <option value={item.value} key={index}>
                            {item.value}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Task */}
                    <div className='form-group'>
                      <textarea
                        className='form-control rounded-0'
                        id='exampleFormControlTextarea2'
                        rows={3}
                        placeholder='Task'
                        value={updateTask}
                        onChange={(e) => setUpdateTask(e.target.value)}
                      />
                    </div>

                    {/* Add Agenda */}
                    <div className='my-5'>
                      <button
                        onClick={updateAgenda}
                        className='btn btn-info btn-block text-white text-bold'
                      >
                        Update Agenda
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditTodo;
