import { Component, OnInit, ElementRef, ViewChild, Pipe, PipeTransform } from '@angular/core';

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
    });
  }

  onSubmit() {
    // update patient exercise data
    this.userdataService.getPatientExerciseData().then((data) => {
      data = JSON.parse(data);

      data['id_latihan'] = this.Exercise.data[0].id;
      data['waktu_mulai'] = "";
      data['waktu_selesai'] = "";

      console.log("## updated data " + JSON.stringify(data));

      this.userdataService.setPatientExerciseData(data);
    });

    // move to post exercise page
    this.router.navigate(['/menu/latihan/pascalatihan']);
  }
}
