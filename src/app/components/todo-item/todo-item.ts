import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent {
  @Input() aufgabe!: Todo;
  @Input() index!: number;

  @Output() loeschen = new EventEmitter<number>();
  @Output() erledigtUmschalten = new EventEmitter<number>();

  loeschenKlick() {
    this.loeschen.emit(this.index);
  }

  erledigtKlick() {
    this.erledigtUmschalten.emit(this.index);
  }
}