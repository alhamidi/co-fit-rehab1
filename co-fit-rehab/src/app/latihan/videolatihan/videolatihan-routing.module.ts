import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideolatihanPage } from './videolatihan.page';

const routes: Routes = [
  {
    path: '',
    component: VideolatihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideolatihanPageRoutingModule {}
