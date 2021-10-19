// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {
//   constructor() {}
// }



////

import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription; 
  // for storing the returned subscription

  constructor (private platform: Platform) { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}