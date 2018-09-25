import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-todo-filter-and-search-dialog',
  templateUrl: './todo-filter-and-search-dialog.component.html',
  styleUrls: ['./todo-filter-and-search-dialog.component.css']
})
export class TodoFilterAndSearchDialogComponent {

  selected = 'option1';

  constructor(
    public dialogRef: MatDialogRef<TodoFilterAndSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
