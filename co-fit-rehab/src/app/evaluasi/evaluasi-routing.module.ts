import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluasiPage } from './evaluasi.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluasiPage,
  },
  {
    path: 'mingguan',
    loadChildren: () => import('./mingguan/mingguan.module').then( m => m.MingguanPageModule)
  },
  {
    path: 'bulanan',
    loadChildren: () => import('./bulanan/bulanan.module').then( m => m.BulananPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluasiPageRoutingModule {}
