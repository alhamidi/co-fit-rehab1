import { TestBed } from '@angular/core/testing';

import { MonthlyEvaluationService } from './monthly-evaluation.service';

describe('MonthlyEvaluationService', () => {
  let service: MonthlyEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
