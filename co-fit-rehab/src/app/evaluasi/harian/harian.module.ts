import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarianPageRoutingModule } from './harian-routing.module';

import { HarianPage } from './harian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarianPageRoutingModule
  ],
  declarations: [HarianPage]
})
export class HarianPageModule {}
