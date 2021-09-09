import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

import { PendinginanPageRoutingModule } from './pendinginan-routing.module';

import { PendinginanPage } from './pendinginan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PendinginanPageRoutingModule
  ],
  declarations: [PendinginanPage]
})
export class PendinginanPageModule {}
