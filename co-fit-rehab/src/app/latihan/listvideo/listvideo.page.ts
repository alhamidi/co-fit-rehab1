import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ExerciseService } from './../../services/exercise.service';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.page.html',
  styleUrls: ['./listvideo.page.scss'],
})
export class ListvideoPage implements OnInit {

  @ViewChild('exerciseid') exerciseidRef: ElementRef;

  Exercises: any = [];

  constructor(
    private exerciseService: ExerciseService,
    private userdataService: UserdataService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
   this.userdataService.getCurrentExercise().then((exerciseType) => {
    this.exerciseService.getExercises(exerciseType).subscribe((response) => {
      this.userdataService.getEnduranceLevel().then((enduranceLevel) => {
        this.Exercises = response["data"].slice(0, enduranceLevel);  
      })
    })
  });
 }

 onClick(data){
    // store exercise data
    this.userdataService.setExerciseData(data);

    // move to video page
    this.router.navigate(['/menu/latihan/pralatihan']);

  }
}
