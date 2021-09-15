import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { FormGroup, FormBuilder  } from "@angular/forms";
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private patientService: PatientService    
    ) { 
    this.loginForm = this.formBuilder.group({
      phonenumber: [''],
      password: [''],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert("Masukkan nomor HP dan password Anda dengan benar");
      return false;
    } else {
      this.patientService.login(this.loginForm.value)
      .subscribe((response) => {
        this.zone.run(() => {})
      });
    }
  }
}

