import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LatihanPage } from './latihan.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LatihanPageRoutingModule } from './latihan-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LatihanPageRoutingModule
  ],
  declarations: [LatihanPage]
})
export class LatihanPageModule {}
