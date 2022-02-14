import { TestBed } from '@angular/core/testing';

import { DisplayHandlingService } from './display-handling.service';

describe('DisplayHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayHandlingService = TestBed.get(DisplayHandlingService);
    expect(service).toBeTruthy();
  });
});
