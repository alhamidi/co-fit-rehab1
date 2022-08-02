import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform, AlertController  } from '@ionic/angular';

import { Location } from '@angular/common';

import { UserdataService } from './services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription; 
  // for storing the returned subscription

  constructor (
    private platform: Platform,
    private _location: Location,
    public alertController: AlertController,
    private userdataService: UserdataService, 
    private router: Router,
    ) { 
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/menu/latihan') || this._location.isCurrentPathEqualTo('/login')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else if (this._location.isCurrentPathEqualTo('/menu/latihan/video') || 
                this._location.isCurrentPathEqualTo('/menu/latihan/pendinginan')) {
         document.exitFullscreen();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }

  showExitConfirm() {
    this.alertController.create({
      header: 'Keluar Aplikasi',
      message: 'Apakah Anda yakin ingin keluar?',
      backdropDismiss: false,
      buttons: [{
        text: 'Batal',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Keluar',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      // navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    // this.backButtonSubscription.unsubscribe();
  }
}