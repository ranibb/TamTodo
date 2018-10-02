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

  fSdata: string[];

  private fSdataSubscription: Subscription;

  constructor(private todoStatusService: TodoStatusService) { }

  ngOnInit() {
    this.fSdata = this.todoStatusService.getfSdata();
    this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(() => {
      this.fSdata = this.todoStatusService.getfSdata();
      this.filterItem();
    });
    this.filterItem();
  }

  filterItem() {
    console.log(this.fSdata);

    if ((this.fSdata[0] == "All Todos") && (!this.fSdata[1])) {
      this.todos = TODOS;
    }

    else if ((this.fSdata[0] == "Completed") && ((this.fSdata[1])  || (!this.fSdata[1]))) {
      this.todos = TODOS;
      this.todos = this.todos.filter(
        todo => (
          (todo.completed == true) && (todo.description.toLocaleLowerCase().indexOf(this.fSdata[1].toLocaleLowerCase()) !== -1)
        )
      )
    }

    else if ((this.fSdata[0] == "In progress") && ((this.fSdata[1])  || (!this.fSdata[1]))) {
      this.todos = TODOS;
      this.todos = this.todos.filter(
        todo => (
          (todo.completed == false) && (todo.description.toLocaleLowerCase().indexOf(this.fSdata[1].toLocaleLowerCase()) !== -1)
        )
      )
    }

    else if (((this.fSdata[1]))) {
      this.todos = TODOS;
      this.todos = this.todos.filter(
        todo => (
          (todo.description.toLocaleLowerCase().indexOf(this.fSdata[1].toLocaleLowerCase()) !== -1)
        )
      )
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
    this.fSdataSubscription.unsubscribe();
  }
}
