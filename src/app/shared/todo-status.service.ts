import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoStatusService {

  private selectedFilter: string;
  todoFilterUpdated = new Subject();

  todoFilter(selectedFilter) {
    this.selectedFilter = selectedFilter;
    this.todoFilterUpdated.next();
  }

  getTodoFilter() {
    return this.selectedFilter;
  }

  constructor() { }
}
