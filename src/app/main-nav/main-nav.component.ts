import { Component, ViewChild, Inject } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import { TodoFilterAndSearchDialogComponent } from '../todo-filter-and-search-dialog/todo-filter-and-search-dialog.component'
import { TodoStatusService } from '../shared/todo-status.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  name: string;

  selected = 'All Todos';

  @ViewChild('drawer')
  drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public dialog: MatDialog,
    private todoStatusService: TodoStatusService
  ) { }

  selectedFilter: string = 'All Todos';
  searchKey: string = '';
  fSdata: string[];

  private fSdataSubscription: Subscription;

  ngOnInit() {
    this.fSdata = this.todoStatusService.getfSdata();
    this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(() => {
      this.fSdata = this.todoStatusService.getfSdata();
      this.selected = this.fSdata[0];
      this.selectedFilter = this.fSdata[0]
      this.searchKey = this.fSdata[1]
    });
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

  onClickClose() {
    this.breakpointObserver
      .observe([Breakpoints.Handset]) //.observe(['(max-width: 959px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.drawer.close()
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoFilterAndSearchDialogComponent, {
      width: '260px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  ngOnDestroy() {
    this.fSdataSubscription.unsubscribe();
  }
}
