import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo = {
    id: 0,
    title: '',
    done: false,
  };
  @Output() remove = new EventEmitter;
  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(): void {
    this.remove.emit(this.todo);
    console.log(this.todo.title, 'removido');
  }

  markAsDone(): void {
    if (this.done)
      this.done = false;
    else
      this.done = true;
  }
}
