import { TestBed } from '@angular/core/testing';

import { PatientExerciseService } from './patientexercise.service';

describe('PatientExerciseService', () => {
  let service: PatientExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
