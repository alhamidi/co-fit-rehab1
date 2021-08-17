import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { MonthlyEvaluationService } from './../../services/monthly-evaluation.service';
import { UserdataService } from './../../services/userdata.service';


@Component({
  selector: 'app-bulanan',
  templateUrl: './bulanan.page.html',
  styleUrls: ['./bulanan.page.scss'],
})

export class BulananPage implements OnInit {
  Evaluation: any = [];

  constructor(
    private evalService: MonthlyEvaluationService,
    private userdataService: UserdataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.userdataService.getPatientId().then((patientId) => {
      this.evalService.getEvaluations(patientId).subscribe((response) => {
        this.Evaluation = response;
        console.log('**response ' + this.Evaluation);
      })  
    });
  }
}

