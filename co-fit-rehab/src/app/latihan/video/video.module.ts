import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule  } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';
import { VideoPage } from './video.page';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VideoPageRoutingModule
  ],
  declarations: [VideoPage]

})
export class VideoPageModule {}
