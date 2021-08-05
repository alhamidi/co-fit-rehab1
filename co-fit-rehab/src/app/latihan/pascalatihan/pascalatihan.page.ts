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

  postExerciseForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private patientExerciseService: PatientExerciseService    
  ) { 

this.postExerciseForm = this.formBuilder.group({
      pasca_bs: [''],
      pasca_sato2: [''],
      pasca_hr: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.postExerciseForm.valid) {
      return false;
    } else {
      this.patientExerciseService.createPatientExercise(this.postExerciseForm.value)
        .subscribe((response) => {
          alert(response);
          if (response["status"] == 1) {
          this.zone.run(() => {
            this.postExerciseForm.reset();
            this.router.navigate(['/menu/latihan']);
          })}
          else {

            this.zone.run(() => {
              alert("Failed");
            // this.postExerciseForm.reset();
            // this.router.navigate(['/menu/latihan']);
          })
          }
        });
    }
  }

}
