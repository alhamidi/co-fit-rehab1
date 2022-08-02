import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { FormGroup, FormBuilder  } from "@angular/forms";
import { PatientService } from './../services/patient.service';
import { UserdataService } from './../services/userdata.service';

import { Router } from '@angular/router';

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
    private router: Router,
    private patientService: PatientService,
    private userdataService: UserdataService,     
  ) { 
    this.userdataService.getPatientId().then((patientId) => {
      if(patientId != null) {
        this.router.navigate(['/menu/latihan']);
      } 
    });

    this.loginForm = this.formBuilder.group({
      phonenumber: [''],
      password: [''],
    });

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

