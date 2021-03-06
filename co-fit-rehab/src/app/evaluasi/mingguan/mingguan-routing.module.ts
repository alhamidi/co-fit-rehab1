import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MingguanPage } from './mingguan.page';

const routes: Routes = [
  {
    path: '',
    component: MingguanPage
  },
  {
    path: 'tambah',
    loadChildren: () => import('./tambah/tambah.module').then( m => m.TambahPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MingguanPageRoutingModule {}
