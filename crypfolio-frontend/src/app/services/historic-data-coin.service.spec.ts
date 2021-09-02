import { TestBed } from '@angular/core/testing';

import { HistoricDataCoinService } from './historic-data-coin.service';

describe('HistoricDataCoinService', () => {
  let service: HistoricDataCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricDataCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
