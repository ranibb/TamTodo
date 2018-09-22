import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = TODOS;
  selectedTodo: Todo;

  constructor() { }

  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    if (this.selectedTodo.completed == false) {
      this.selectedTodo.completed = true;
    }
    else if (this.selectedTodo.completed == true) {
      this.selectedTodo.completed = false;
    }
    console.log(this.selectedTodo);
  }
}
