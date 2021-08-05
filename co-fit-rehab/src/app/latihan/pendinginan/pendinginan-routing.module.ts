import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendinginanPage } from './pendinginan.page';

const routes: Routes = [
  {
    path: '',
    component: PendinginanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendinginanPageRoutingModule {}
