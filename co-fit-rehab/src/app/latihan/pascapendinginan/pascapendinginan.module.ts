import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { //FormsModule, 
  ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PascapendinginanPageRoutingModule } from './pascapendinginan-routing.module';

import { PascapendinginanPage } from './pascapendinginan.page';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PascapendinginanPageRoutingModule
  ],
  declarations: [PascapendinginanPage]
})
export class PascapendinginanPageModule {}
