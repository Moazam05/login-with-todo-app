import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Salman', task: 'Submit Task Today', priority: 'High' },
  { id: '2', title: 'Kashif', task: 'Make New UI', priority: 'Medium' },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    updateTodo: (state, action) => {
      const { id, title, task, priority } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.title = title;
        existingUser.task = task;
        existingUser.priority = priority;
      }
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
