import { TestBed } from '@angular/core/testing';

import { CachorroService } from './cachorro.service';

describe('CachorroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CachorroService = TestBed.get(CachorroService);
    expect(service).toBeTruthy();
  });
});
