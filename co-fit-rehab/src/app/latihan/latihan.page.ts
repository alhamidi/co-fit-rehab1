import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './../services/userdata.service';

@Component({
  selector: 'app-latihan',
  templateUrl: 'latihan.page.html',
  styleUrls: ['latihan.page.scss']
})
export class LatihanPage {

  constructor(
    private router: Router,
    private userdataService: UserdataService
  ) {}

  chooseExercise(option) {
    // store option
    this.storeCurrentExercise(option);

    // navigate page
    switch(option){
      case 1:
        this.router.navigate(['/menu/latihan/pralatihan']);
        break;
      case 2:
        this.router.navigate(['/menu/latihan/listvideo']);
        break;
      case 3:
        this.router.navigate(['/menu/latihan/pralatihan']);
        break;
      case 4:
        this.router.navigate(['/menu/latihan/statistik']);
        break;
      default:
        alert("Pilihan tidak tersedia");
        break;
    }
  }

  storeCurrentExercise(data) {
    this.userdataService.setCurrentExercise(data);
  }

}
