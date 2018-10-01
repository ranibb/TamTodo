import { TestBed } from '@angular/core/testing';

import { TodoStatusService } from './todo-status.service';

describe('TodoStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoStatusService = TestBed.get(TodoStatusService);
    expect(service).toBeTruthy();
  });
});
