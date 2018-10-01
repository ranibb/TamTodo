import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
import { TodoStatusService } from '../shared/todo-status.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  // Filter arguments
  dDFilter = {category: 'design and development'};
  improvmentFilter = {category: 'improvment'};
  otherFilter = {category: 'other'};

  todos = TODOS;
  selectedTodo: Todo;

  selectedFilter: string;

  private todoFilterSubscription: Subscription;

  constructor(private todoStatusService: TodoStatusService) {}

  ngOnInit() {
    this.selectedFilter = this.todoStatusService.getTodoFilter();
    this.todoFilterSubscription = this.todoStatusService.todoFilterUpdated.subscribe(() => {
      this.selectedFilter = this.todoStatusService.getTodoFilter();
      this.todoStatusFilter();
    });
  }

  todoStatusFilter() {
    console.log(this.selectedFilter);
    if (this.selectedFilter == "All Todos") {
      this.todos = TODOS;

    }
    if (this.selectedFilter == "Completed") {
      this.todos = TODOS;
      this.todos = this.todos.filter(todo => todo.completed == true)
    }
    if (this.selectedFilter == "In progress") {
      this.todos = TODOS;
      this.todos = this.todos.filter(todo => todo.completed == false)
    }
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

  ngOnDestroy() {
    this.todoFilterSubscription.unsubscribe();
  }
}
