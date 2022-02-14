import { TestBed } from '@angular/core/testing';

import { ValueFormatterService } from './value-formatter.service';

describe('ValueFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueFormatterService = TestBed.get(ValueFormatterService);
    expect(service).toBeTruthy();
  });
});
