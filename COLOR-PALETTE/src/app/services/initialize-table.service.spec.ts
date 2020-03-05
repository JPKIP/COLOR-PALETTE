import { TestBed } from '@angular/core/testing';

import { InitializeTableService } from './initialize-table.service';

describe('InitializeTableService', () => {
  let service: InitializeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitializeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
