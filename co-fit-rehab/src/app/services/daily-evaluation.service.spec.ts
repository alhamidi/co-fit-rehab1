import { TestBed } from '@angular/core/testing';

import { DailyEvaluationService } from './daily-evaluation.service';

describe('DailyEvaluationService', () => {
  let service: DailyEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
