import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDos: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(title: string): void {
    const id = this.toDos.length + 1;
    this.toDos.push(new ToDo(id, title, false));

    console.log(this.toDos);
  }

}
