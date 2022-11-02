import { TestBed } from '@angular/core/testing';

import { ChartDataService } from './chartdata.service';

describe('ChartdataService', () => {
  let service: ChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
