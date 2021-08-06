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
  }


  onSubmit() {
    if (!this.preExerciseForm.valid) {
      return false;
    } else {
      this.setPraLatihanData();
      this.router.navigate(['/menu/latihan/video']);
    }
  }
  
  setPraLatihanData() {
    this.userdataService.setPraLatihanData(
      this.preExerciseForm.get('pra_bs').value,
      this.preExerciseForm.get('pra_sato2').value,
      this.preExerciseForm.get('pra_hr').value
    );

    this.router.navigate(['/menu/latihan/video']);
  }

}
