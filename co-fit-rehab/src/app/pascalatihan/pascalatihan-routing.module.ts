import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PascalatihanPage } from './pascalatihan.page';

const routes: Routes = [
  {
    path: '',
    component: PascalatihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PascalatihanPageRoutingModule {}
