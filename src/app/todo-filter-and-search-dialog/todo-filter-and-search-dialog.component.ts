import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoStatusService } from '../shared/todo-status.service';
import { Subscription } from 'rxjs';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-todo-filter-and-search-dialog',
  templateUrl: './todo-filter-and-search-dialog.component.html',
  styleUrls: ['./todo-filter-and-search-dialog.component.css']
})
export class TodoFilterAndSearchDialogComponent implements OnInit, OnDestroy {

  selected: string;

  constructor(
    public dialogRef: MatDialogRef<TodoFilterAndSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private todoStatusService: TodoStatusService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedFilter: string = 'All Todos';
  searchKey: string = '';
  fSdata: string[];

  private fSdataSubscription: Subscription;

  ngOnInit() {
    this.fSdata = this.todoStatusService.getfSdata();
    this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(() => {
      this.fSdata = this.todoStatusService.getfSdata();
    });
    this.selected = this.fSdata[0];
    this.selectedFilter = this.fSdata[0]
    this.searchKey = this.fSdata[1]
  }

  todoFilter(selectedFilter) {
    this.selectedFilter = selectedFilter;
    this.fSdata = [this.selectedFilter, this.searchKey]
    this.todoStatusService.todofSdata(this.fSdata)
  }

  onSearchChange(searchKey) {
    this.searchKey = searchKey
    this.fSdata = [this.selectedFilter, this.searchKey]
    this.todoStatusService.todofSdata(this.fSdata)
  }

  clearSearch() {
    this.searchKey = '';
    this.fSdata = [this.selectedFilter, this.searchKey]
    this.todoStatusService.todofSdata(this.fSdata)
  }

  ngOnDestroy() {
    this.fSdataSubscription.unsubscribe();
  }

}
