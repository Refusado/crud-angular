import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
    let localTodos: string | null = localStorage.getItem('todos');
    if (localTodos)
      this.todos = JSON.parse(localTodos);
  }

  addToDo(title: string): void {
    const id = this.todos.length + 1;
    this.todos.push(new ToDo(id, title, false));

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    let i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
