import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MingguanPage } from './mingguan.page';

const routes: Routes = [
  {
    path: '',
    component: MingguanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MingguanPageRoutingModule {}
