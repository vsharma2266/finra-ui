import { TestBed, inject } from '@angular/core/testing';

import { FinraService } from './finra.service';

describe('FinraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinraService]
    });
  });

  it('should be created', inject([FinraService], (service: FinraService) => {
    expect(service).toBeTruthy();
  }));
});
