import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkalaBorgPage } from './skala-borg.page';

const routes: Routes = [
  {
    path: '',
    component: SkalaBorgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkalaBorgPageRoutingModule {}
