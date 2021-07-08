import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PralatihanPageRoutingModule } from './pralatihan-routing.module';

import { PralatihanPage } from './pralatihan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PralatihanPageRoutingModule
  ],
  declarations: [PralatihanPage]
})
export class PralatihanPageModule {}
