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
  borgScale: Array<string>;

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
    this.borgScale = ["6", "7", "8", "9", "10", "11", 
                      "12", "13", "14", "15", "16", 
                      "17", "18", "19", "20"];
  }

  onSubmit() {
    if (!this.postCoolingdownForm.valid) {
      alert("Harap lengkapi form pasca pendinginan");
      return false;
    } else {
      this.patientExerciseService.updatePatientExercise(this.postCoolingdownForm.value)
      .subscribe((response) => {
        this.zone.run(() => {
          this.postCoolingdownForm.reset();
          this.router.navigate(['/menu/latihan/']);
        })
      });
    }
  }
}
