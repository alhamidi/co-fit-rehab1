import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendinginanPageRoutingModule } from './pendinginan-routing.module';

import { PendinginanPage } from './pendinginan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendinginanPageRoutingModule
  ],
  declarations: [PendinginanPage]
})
export class PendinginanPageModule {}
