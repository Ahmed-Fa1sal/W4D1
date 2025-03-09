import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from './todo.model';

// Select the todos slice of the state
export const selectTodos = createFeatureSelector<Todo[]>('todos');

// Get only completed tasks
export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => todo.completed)
);

// Get only pending tasks
export const selectPendingTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => !todo.completed)
);
