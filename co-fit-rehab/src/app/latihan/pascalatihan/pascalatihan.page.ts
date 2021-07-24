import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { PatientExerciseService } from './../../services/patientexercise.service';


@Component({
  selector: 'app-pascalatihan',
  templateUrl: './pascalatihan.page.html',
  styleUrls: ['./pascalatihan.page.scss'],
})
export class PascalatihanPage implements OnInit {

  exerciseForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private patientExerciseService: PatientExerciseService    
  ) { 
this.exerciseForm = this.formBuilder.group({
      pasca_bs: [''],
      pasca_sato2: [''],
      pasca_hr: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.exerciseForm.valid) {
      return false;
    } else {
      this.patientExerciseService.createPatientExercise(this.exerciseForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.exerciseForm.reset();
            this.router.navigate(['/menu/latihan']);
          })
        });
    }
  }

}
