import { Component, OnInit, ElementRef, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

import { ExerciseService } from './../../services/exercise.service';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})

export class VideoPage implements OnInit, PipeTransform {

  Exercise: any = [];
  public exerciseId: string;
  startTime;
  endTime;
  duration;


  @ViewChild('exerciseid') exerciseidRef: ElementRef;

  constructor(
    private exerciseService: ExerciseService,
    private userdataService: UserdataService, 
    private router: Router,
    private sanitizer: DomSanitizer
  ) { 
    this.sanitizer = sanitizer;
  }

  ngOnInit() {

  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ionViewDidEnter() {
    // exercise = endurance, then search by id
    this.userdataService.getCurrentExercise().then((exerciseType) => {
      if(exerciseType == 2) {
        this.userdataService.getExerciseData().then((response) => {
        this.Exercise = JSON.parse(response);
        this.Exercise = {"data":[this.Exercise]};
        console.log('**response ' + this.Exercise);
      })
      } else if(exerciseType == 1 || exerciseType == 3) {
        this.exerciseService.getExercises(exerciseType).subscribe((response) => {
        this.Exercise = response;
        console.log('**response ' + this.Exercise);
        });
      } else {
        alert("Pilihan tidak tersedia");
      }

      // start timer
      this.startTime = new Date();

    });
  }

  onSubmit() {
    // stop timer
    this.endTime = new Date();

    // calculate exercise duration (as timestamp)
    this.duration = this.endTime.getTime() - this.startTime.getTime();

    // update patient exercise data
    this.userdataService.getPatientExerciseData().then((data) => {
      data = JSON.parse(data);

      data['id_latihan'] = this.Exercise.data[0].id;
      data['waktu_mulai'] = formatDate(this.startTime, 'yyyy-MM-dd HH:mm:ss', 'en');
      data['waktu_selesai'] = formatDate(this.endTime, 'yyyy-MM-dd HH:mm:ss', 'en');
      data['durasi_latihan'] = this.duration;

      console.log("## updated data " + JSON.stringify(data));

      this.userdataService.setPatientExerciseData(data);
    });

    // move to post exercise page
    this.router.navigate(['/menu/latihan/pascalatihan']);
  }

}
