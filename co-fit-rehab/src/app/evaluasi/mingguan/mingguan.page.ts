import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { WeeklyEvaluationService } from './../../services/weekly-evaluation.service';
import { UserdataService } from './../../services/userdata.service';


@Component({
  selector: 'app-mingguan',
  templateUrl: './mingguan.page.html',
  styleUrls: ['./mingguan.page.scss'],
})

export class MingguanPage implements OnInit {
  Evaluation: any = [];

  constructor(
    private evalService: WeeklyEvaluationService,
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

