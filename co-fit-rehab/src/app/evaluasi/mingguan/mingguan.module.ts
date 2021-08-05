import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  // FormsModule
  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MingguanPageRoutingModule } from './mingguan-routing.module';

import { MingguanPage } from './mingguan.page';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MingguanPageRoutingModule
  ],
  declarations: [MingguanPage]
})
export class MingguanPageModule {}
