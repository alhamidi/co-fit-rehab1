import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListvideoPageRoutingModule } from './listvideo-routing.module';

import { ListvideoPage } from './listvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListvideoPageRoutingModule
  ],
  declarations: [ListvideoPage]
})
export class ListvideoPageModule {}
