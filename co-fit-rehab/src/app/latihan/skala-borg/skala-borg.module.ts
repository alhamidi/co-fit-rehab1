import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkalaBorgPageRoutingModule } from './skala-borg-routing.module';

import { SkalaBorgPage } from './skala-borg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkalaBorgPageRoutingModule
  ],
  declarations: [SkalaBorgPage]
})
export class SkalaBorgPageModule {}
