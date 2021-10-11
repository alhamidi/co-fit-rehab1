import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { FormGroup, FormBuilder  } from "@angular/forms";
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pralatihan',
  templateUrl: './pralatihan.page.html',
  styleUrls: ['./pralatihan.page.scss'],
})

export class PralatihanPage implements OnInit {

  preExerciseForm: FormGroup;
  borgScale: Array<string>;
  
  constructor(
    private router: Router, 
    public formBuilder: FormBuilder, 
    private userdataService: UserdataService, 
    private zone: NgZone,) { 

    this.preExerciseForm = this.formBuilder.group({
      pra_bs: [''],
      pra_sato2: [''],
      pra_hr: ['']
    })
  }

  ngOnInit() {
    this.borgScale = ["6", "7", "8", "9", "10", "11", 
                      "12", "13", "14", "15", "16", 
                      "17", "18", "19", "20"];
  }

  onSubmit() {
    if (!this.preExerciseForm.valid) {
      alert("Harap lengkapi form pralatihan");
      return false;
    } else {
      this.setPatientExerciseData();
      this.router.navigate(['/menu/latihan/video']);
    }
  }

  setPatientExerciseData() {
    this.userdataService.getPatientId().then((patientId) => {
      let data = {
        'id_pasien': patientId,
        'pra_bs': this.preExerciseForm.get('pra_bs').value,
        'pra_sato2': this.preExerciseForm.get('pra_sato2').value,
        'pra_hr': this.preExerciseForm.get('pra_hr').value
      }
      this.userdataService.setPatientExerciseData(data);  
    }); 
  }
}
