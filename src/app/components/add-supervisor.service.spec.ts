import { TestBed } from '@angular/core/testing';

import { AddSupervisorService } from './add-supervisor.service';

describe('AddSupervisorService', () => {
  let service: AddSupervisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSupervisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
