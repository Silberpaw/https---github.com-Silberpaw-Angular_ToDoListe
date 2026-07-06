import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoItemComponent } from '../todo-item/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {
  neueAufgabe = '';
  neueKategorie = 'Allgemein';
neuePrioritaet: 'niedrig' | 'mittel' | 'hoch' = 'mittel';

  constructor(private todoService: TodoService) {}

  get aufgaben(): Todo[] {
    return this.todoService.alleAufgaben();
  }

  aufgabeHinzufuegen() {
  this.todoService.hinzufuegen(
    this.neueAufgabe,
    this.neueKategorie,
    this.neuePrioritaet
  );

  this.neueAufgabe = '';
  this.neueKategorie = 'Allgemein';
  this.neuePrioritaet = 'mittel';
}
  aufgabeLoeschen(index: number) {
    this.todoService.loeschen(index);
  }

  erledigtUmschalten(index: number) {
    this.todoService.erledigtUmschalten(index);
  }
}