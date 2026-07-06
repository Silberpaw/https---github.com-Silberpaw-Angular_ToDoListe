import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { TodoListComponent } from './components/todo-list/todo-list';
import { TodoCounterComponent } from './components/todo-counter/todo-counter';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoListComponent, TodoCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}