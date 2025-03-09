import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './state/todo.reducer';  // Import Todo interface
import { addTask, deleteTask, toggleTask } from './state/todo.actions';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this component as standalone
  imports: [CommonModule, ReactiveFormsModule],  // Import required modules here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoForm: FormGroup;
  tasks$: Observable<Todo[]>;  // Observable for tasks

  constructor(private fb: FormBuilder, private store: Store<{ todos: Todo[] }>) {
    // Initialize the form with one control 'description'
    this.todoForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
    });

    // Select 'todos' state from the store and assign to tasks$
    this.tasks$ = this.store.select('todos');  // Make sure you're selecting 'todos' correctly
  }

  // Method to add a task
  addTask() {
    if (this.todoForm.valid) {
      const task: Todo = {
        id: Date.now(),  // Simple id generator
        description: this.todoForm.value.description,
        completed: false,
      };
      this.store.dispatch(addTask({ task }));
      this.todoForm.reset();
    }
  }

  // Method to toggle task completion
  toggleTask(id: number) {
    this.store.dispatch(toggleTask({ id }));
  }

  // Method to delete a task
  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}