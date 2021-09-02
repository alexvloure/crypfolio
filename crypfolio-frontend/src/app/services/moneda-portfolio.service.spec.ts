import { TestBed } from '@angular/core/testing';

import { MonedaPortfolioService } from './moneda-portfolio.service';

describe('MonedaPortfolioService', () => {
  let service: MonedaPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedaPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
