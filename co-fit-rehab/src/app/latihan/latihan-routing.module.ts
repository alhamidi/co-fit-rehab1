import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatihanPage } from './latihan.page';

const routes: Routes = [
  {
    path: '',
    component: LatihanPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatihanPageRoutingModule {}
