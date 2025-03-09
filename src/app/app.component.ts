import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './state/todo.model';
import { addTask, deleteTask, toggleTask } from './state/todo.actions';
import { selectTodos } from './state/todo.selectors';
import { CommonModule } from '@angular/common';

interface AppState {
  todos: Todo[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoForm: FormGroup;
  tasks$: Observable<Todo[]>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.todoForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
    });

    // Use selector to get tasks
    this.tasks$ = this.store.select(selectTodos);
  }

  addTask() {
    if (this.todoForm.valid) {
      const task: Todo = {
        id: Date.now(),
        description: this.todoForm.value.description,
        completed: false,
      };
      this.store.dispatch(addTask({ task }));
      this.todoForm.reset();
    }
  }

  toggleTask(id: number) {
    this.store.dispatch(toggleTask({ id }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}
