import { TestBed } from '@angular/core/testing';

import { LiteLoggerService } from './lite-logger.service';

describe('LiteLoggerService', () => {
  let service: LiteLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
