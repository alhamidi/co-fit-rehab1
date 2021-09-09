import { Component, OnInit,  ElementRef, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { ExerciseService } from './../../services/exercise.service';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({
//   name: 'safe'
// })

export class ExerciseData
{
  _id: string; 
  nama: string;
  tipe: string;
  deskripsi: string;
  url: string;
  // safe_url: SafeUrl;
}

@Component({
  selector: 'app-pendinginan',
  templateUrl: './pendinginan.page.html',
  styleUrls: ['./pendinginan.page.scss'],
})

export class PendinginanPage implements OnInit, PipeTransform {
  Exercise: Array<ExerciseData> = [];
  startTime;
  endTime;
  duration;

  constructor(
    private exerciseService: ExerciseService,
    private router: Router,
    private userdataService: UserdataService, 
    private sanitizer: DomSanitizer,
  ) { 
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

  transform(url) {
    alert("transform "+ url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ionViewDidEnter() {
    this.exerciseService.getExercises(4).subscribe((response) => {
      this.Exercise = response;
      console.log('**response ' + this.Exercise);

      // start timer
      this.startTime = new Date();
    })
  }

  onSubmit() {
    // stop timer
    this.endTime = new Date();

    // calculate cooling down duration (as timestamp)
    this.duration = this.endTime.getTime() - this.startTime.getTime();

    this.userdataService.getLatestId().then((latestId) => {
      let data = {
        id: latestId,
        waktu_mulai_cd: formatDate(this.startTime, 'yyyy-MM-dd HH:mm:ss', 'en'),
        waktu_selesai_cd: formatDate(this.endTime, 'yyyy-MM-dd HH:mm:ss', 'en'),
        durasi_cd: this.duration,
      }
      this.userdataService.setCoolingDownData(data); 
    });

     // move to post cooling down page
    this.router.navigate(['/menu/latihan/pascapendinginan']);
  }
}
