export interface Todo {
  id: number;
  text: string;
  erledigt: boolean;
  prioritaet: 'niedrig' | 'mittel' | 'hoch';
  erstelltAm: Date;
  kategorie: string;
}