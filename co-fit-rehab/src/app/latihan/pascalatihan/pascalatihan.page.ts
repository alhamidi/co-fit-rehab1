import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { PatientExerciseService } from './../../services/patientexercise.service';
import { UserdataService } from './../../services/userdata.service';


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
    private patientExerciseService: PatientExerciseService,
    private userdataService: UserdataService    
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
      alert("Harap lengkapi form pasca latihan");
      return false;
    } else {
      this.patientExerciseService.createPatientExercise(this.postExerciseForm.value)
      .subscribe((response) => {
        this.zone.run(() => {
          this.postExerciseForm.reset();
          this.router.navigate(['/menu/latihan/pendinginan/']);
        })
      });
    }
  }
}
