import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulananPage } from './bulanan.page';

const routes: Routes = [
  {
    path: '',
    component: BulananPage
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
export class BulananPageRoutingModule {}
