import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './state/todo.reducer';  // Import your todoReducer
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,  // Reactive Forms
    StoreModule.forRoot({ todos: todoReducer }),  // Register the todo reducer with NgRx Store
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
