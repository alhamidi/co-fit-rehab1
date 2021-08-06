import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PascapendinginanPage } from './pascapendinginan.page';

const routes: Routes = [
  {
    path: '',
    component: PascapendinginanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PascapendinginanPageRoutingModule {}
