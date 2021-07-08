import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulananPageRoutingModule } from './bulanan-routing.module';

import { BulananPage } from './bulanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulananPageRoutingModule
  ],
  declarations: [BulananPage]
})
export class BulananPageModule {}
