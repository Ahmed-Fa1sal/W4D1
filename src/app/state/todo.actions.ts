import { createAction, props } from "@ngrx/store";
import { Todo } from './todo.reducer';

// Define actions for adding, deleting, and toggling tasks
export const addTask = createAction(
    '[Todo] Add Task',
    props<{ task: Todo }>()
  );

  export const deleteTask = createAction(
    '[Todo] Delete Task',
    props<{ id: number }>()
  );
  export const toggleTask = createAction(
    '[Todo] Toggle Task',
    props<{ id: number }>()
  );