import { Component, OnInit } from '@angular/core';

import { ExerciseService } from './../../services/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.page.html',
  styleUrls: ['./listvideo.page.scss'],
})
export class ListvideoPage implements OnInit {

  Exercises: any = [];

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.exerciseService.getExercises(2).subscribe((response) => {
      this.Exercises = response;
      console.log('**response ' + this.Exercises);
    })
  }

}
