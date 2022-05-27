import React, { useState } from 'react';
import './CreateTodo.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Navbar from '../Navbar';
import { addTodo } from '../../features/todoSlice';

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

const CreateTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');

  const agendaHandler = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: title,
        task: task,
        priority: priority,
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
                    <p className='h4 mb-4'>Create your Agenda</p>
                    {/* Title */}
                    <input
                      type='text'
                      id='defaultContactFormName'
                      className='form-control mb-4'
                      placeholder='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* Priority */}
                    <div className='form-group'>
                      <select
                        className='form-control browser-default custom-select mb-4'
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option disabled selected>
                          Choose Priority
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
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                      />
                    </div>

                    {/* Add Agenda */}
                    <div className='my-5'>
                      <button
                        onClick={agendaHandler}
                        className='btn btn-info btn-block text-white text-bold'
                      >
                        Add Agenda
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

export default CreateTodo;
