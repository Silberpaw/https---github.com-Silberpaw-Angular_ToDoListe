import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-counter',
  standalone: true,
  templateUrl: './todo-counter.html',
  styleUrl: './todo-counter.css'
})
export class TodoCounterComponent {
  constructor(private todoService: TodoService) {}

  get alle() {
    return this.todoService.alleAufgaben().length;
  }

  get offen() {
    return this.todoService.alleAufgaben().filter(aufgabe => !aufgabe.erledigt).length;
  }

  get erledigt() {
    return this.todoService.alleAufgaben().filter(aufgabe => aufgabe.erledigt).length;
  }
}