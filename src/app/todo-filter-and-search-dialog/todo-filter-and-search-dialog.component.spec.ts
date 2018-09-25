import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterAndSearchDialogComponent } from './todo-filter-and-search-dialog.component';

describe('TodoFilterAndSearchDialogComponent', () => {
  let component: TodoFilterAndSearchDialogComponent;
  let fixture: ComponentFixture<TodoFilterAndSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFilterAndSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterAndSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
