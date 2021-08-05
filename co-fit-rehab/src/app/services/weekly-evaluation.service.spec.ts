import { TestBed } from '@angular/core/testing';

import { WeeklyEvaluationService } from './weekly-evaluation.service';

describe('WeeklyEvaluationService', () => {
  let service: WeeklyEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
