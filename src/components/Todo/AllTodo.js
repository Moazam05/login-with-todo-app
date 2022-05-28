import React, { useState } from 'react';
import './AllTodo.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from '../../features/todoSlice';

const AllTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [searchTodo, setSearchTodo] = useState('');

  const deleteAgenda = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div>
      <section className='vh-100 gradient-custom-2'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-12 col-xl-10'>
              <div className='card mask-custom'>
                <div className='card-body p-4 text-white'>
                  <div className='text-center pt-3 pb-2'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp'
                      alt='Check'
                      width={60}
                    />
                    <h2 className='my-4'>Task List</h2>
                  </div>
                  <div className='col-sm-4'>
                    <input
                      type='text'
                      className='form-control mb-4'
                      placeholder='Search Todo'
                      onChange={(e) => setSearchTodo(e.target.value)}
                    />
                  </div>
                  <table className='table text-white mb-0'>
                    <thead>
                      <tr>
                        <th scope='col'>Team Member</th>
                        <th scope='col'>Task</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos
                        .filter((item) => {
                          if (searchTodo === '') {
                            return item;
                          } else if (
                            item.title
                              .toLowerCase()
                              .includes(searchTodo.toLowerCase())
                          )
                            return item;
                        })
                        .map((todo, index) => {
                          const { title, task, priority } = todo;
                          return (
                            <tr className='fw-normal' key={index}>
                              <th>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                  }}
                                >
                                  <div className='avatar-circle'>
                                    <span className='initials'>
                                      {title.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <span className='ms-2'>{title}</span>
                                </div>
                              </th>
                              <td className='align-middle'>
                                <span>{task}</span>
                              </td>
                              <td className='align-middle'>
                                <h6 className='mb-0'>
                                  <span
                                    className={
                                      priority === 'High'
                                        ? 'badge bg-danger'
                                        : priority === 'Medium'
                                        ? 'badge bg-success'
                                        : 'badge bg-warning'
                                    }
                                  >
                                    {`${priority} Priority`}
                                  </span>
                                </h6>
                              </td>
                              <td className='align-middle'>
                                <Link
                                  to={`update-todo/${todo.id}`}
                                  data-mdb-toggle='tooltip'
                                  title='Update'
                                >
                                  <i className='fas fa-edit fa-lg text-success me-3' />
                                </Link>
                                <button
                                  style={{
                                    background: 'transparent',
                                    border: 'none',
                                  }}
                                  onClick={() => deleteAgenda(todo.id)}
                                  data-mdb-toggle='tooltip'
                                  title='Remove'
                                >
                                  <i className='fas fa-trash-alt fa-lg text-warning' />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTodo;
