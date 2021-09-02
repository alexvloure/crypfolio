import { TestBed } from '@angular/core/testing';

import { CoinDetailsService } from './coin-details.service';

describe('CoinDetailsService', () => {
  let service: CoinDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
