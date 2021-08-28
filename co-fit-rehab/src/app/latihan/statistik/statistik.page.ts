import { Component, OnInit } from '@angular/core';

import { PatientExerciseService } from './../../services/patientexercise.service';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-statistik',
  templateUrl: './statistik.page.html',
  styleUrls: ['./statistik.page.scss'],
})
export class StatistikPage implements OnInit {

  Exercises: any = [];

  constructor(
    private patientExerciseService: PatientExerciseService,
    private userdataService: UserdataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
     this.userdataService.getPatientId().then((patientId) => {
      this.patientExerciseService.getPatientExercises(patientId).subscribe((response) => {
        this.Exercises = response;
      });
    });
  }
}