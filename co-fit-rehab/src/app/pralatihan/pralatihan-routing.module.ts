import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PralatihanPage } from './pralatihan.page';

const routes: Routes = [
  {
    path: '',
    component: PralatihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PralatihanPageRoutingModule {}
