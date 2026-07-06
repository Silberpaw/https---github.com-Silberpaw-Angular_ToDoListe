import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private aufgaben: Todo[] = [];

  constructor() {
    this.ladeAufgaben();
  }

  alleAufgaben() {
    return this.aufgaben;
  }

  hinzufuegen(text: string, neueKategorie: string, neuePrioritaet: string) {
    if (text.trim() !== '') {
      this.aufgaben.push({
        text: text,
        erledigt: false,
        id: this.aufgaben.length + 1,
        prioritaet: 'mittel',
        erstelltAm: new Date(),
        kategorie: 'Allgemein'  
      });

      this.speichereAufgaben();
    }
  }

  loeschen(index: number) {
    this.aufgaben.splice(index, 1);
    this.speichereAufgaben();
  }

  erledigtUmschalten(index: number) {
    this.aufgaben[index].erledigt = !this.aufgaben[index].erledigt;
    this.speichereAufgaben();
  }

  private speichereAufgaben() {
    localStorage.setItem('todos', JSON.stringify(this.aufgaben));
  }

  private ladeAufgaben() {
    const daten = localStorage.getItem('todos');

    if (daten) {
      this.aufgaben = JSON.parse(daten);
    }
  }
}