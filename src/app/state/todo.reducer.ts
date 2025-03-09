import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask, toggleTask } from './todo.actions';

// Todo model definition
export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

// Initial state
export const initialState: Todo[] = [];

// Reducer function to handle actions
export const todoReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(deleteTask, (state, { id }) => state.filter(task => task.id !== id)),
  on(toggleTask, (state, { id }) =>
    state.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  )
);
