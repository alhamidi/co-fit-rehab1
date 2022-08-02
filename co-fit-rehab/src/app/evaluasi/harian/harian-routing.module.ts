import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarianPage } from './harian.page';

const routes: Routes = [
  {
    path: '',
    component: HarianPage
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
export class HarianPageRoutingModule {}
