import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [
    {
      id: 1,
      title: 'comer uns cus',
      done: false,
    },
    {
      id: 1,
      title: 'comer uns cus',
      done: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(title: string): void {
    const id = this.todos.length + 1;
    this.todos.push(new ToDo(id, title, false));

    console.log(this.todos);
  }

  removeTodo(todo: any) {
    let i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);
  }
}
