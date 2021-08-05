import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  // FormsModule
  ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { BulananPageRoutingModule } from './bulanan-routing.module';

import { BulananPage } from './bulanan.page';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BulananPageRoutingModule
  ],
  declarations: [BulananPage]
})
export class BulananPageModule {}
