import { Component, OnInit } from '@angular/core';

import { ExerciseService } from './../../services/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  Exercise: any = [];

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.exerciseService.getExercise(1).subscribe((response) => {
      this.Exercise = response;
      console.log('**response ' + this.Exercise);
    })
  }

}
