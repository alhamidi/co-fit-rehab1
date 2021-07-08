import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluasiPage } from './evaluasi.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EvaluasiPageRoutingModule } from './evaluasi-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: EvaluasiPage }]),
    EvaluasiPageRoutingModule,
  ],
  declarations: [EvaluasiPage]
})
export class EvaluasiPageModule {}
