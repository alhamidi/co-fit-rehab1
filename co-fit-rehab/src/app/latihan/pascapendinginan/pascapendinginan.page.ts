import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { PatientExerciseService } from './../../services/patientexercise.service';
import { UserdataService } from './../../services/userdata.service';


@Component({
  selector: 'app-pascapendinginan',
  templateUrl: './pascapendinginan.page.html',
  styleUrls: ['./pascapendinginan.page.scss'],
})
export class PascapendinginanPage implements OnInit {

  postCoolingdownForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private patientExerciseService: PatientExerciseService,
    private userdataService: UserdataService    
  ) { 

this.postCoolingdownForm = this.formBuilder.group({
      cd_bs: [''],
      cd_sato2: [''],
      cd_hr: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.postCoolingdownForm.valid) {
      return false;
    } else {
      this.patientExerciseService.createPatientExercise(this.postCoolingdownForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.postCoolingdownForm.reset();
            this.router.navigate(['/menu/latihan/']);
          })
        });
    }
  }

}
