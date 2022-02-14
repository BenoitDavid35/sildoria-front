import { TestBed } from '@angular/core/testing';

import { GetRessourcesService } from './get-ressources.service';

describe('GetRessourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRessourcesService = TestBed.get(GetRessourcesService);
    expect(service).toBeTruthy();
  });
});
