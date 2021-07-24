import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { //FormsModule, 
  ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PascalatihanPageRoutingModule } from './pascalatihan-routing.module';

import { PascalatihanPage } from './pascalatihan.page';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PascalatihanPageRoutingModule
  ],
  declarations: [PascalatihanPage]
})
export class PascalatihanPageModule {}
