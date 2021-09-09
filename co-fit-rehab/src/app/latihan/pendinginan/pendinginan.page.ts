import { Component, OnInit,  ElementRef, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { ExerciseService } from './../../services/exercise.service';
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

  constructor(
    private exerciseService: ExerciseService,
    private router: Router,
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
  
      // for (var data of response["data"]) {
      //   var exercise = new ExerciseData();
      //   exercise._id = data._id;
      //   exercise.nama = data.nama;
      //   exercise.tipe = data.tipe;
      //   exercise.deskripsi = data.deskripsi;
      //   exercise.url = data.url;
      //   exercise.safe_url = this.sanitizer.bypassSecurityTrustUrl(data.url);

      //   this.Exercise.push(exercise);

      // }
      
      this.Exercise = response;
      console.log('**response ' + this.Exercise);
    })
  }

}
