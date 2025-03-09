import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './app/state/todo.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ todos: todoReducer })], // Register Store
});
