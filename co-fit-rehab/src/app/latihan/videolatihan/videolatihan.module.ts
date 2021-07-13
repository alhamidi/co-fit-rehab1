import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideolatihanPageRoutingModule } from './videolatihan-routing.module';

import { VideolatihanPage } from './videolatihan.page';

import { Component } from '@angular/core';
// import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-latihan',
  templateUrl: 'videolatihan.page.html',
  styleUrls: ['videolatihan.page.scss'],
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideolatihanPageRoutingModule
  ],
  declarations: [VideolatihanPage]
})

export class VideolatihanPageModule {

  // videoOptions: VideoOptions

  // constructor(
  //   private videoPlayer: VideoPlayer
  // ) 
  // {
  //   this.videoOptions = {
  //     volume: 0.7
  //   };
  // }

  // playOfflineVideo() {
  //   this.videoPlayer.play('assets/video/test-video.mp4').then(() => {
  //     console.log('video finished');
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

  // playOnlineVideo() {
  //   this.videoPlayer.play('http://static.videogular.com/assets/videos/elephants-dream.mp4').then(() => {
  //     console.log('video finished');
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

  // closeVideoPlayer() {
  //   this.videoPlayer.close();
  // }


}

