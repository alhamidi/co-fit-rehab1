import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'latihan',
        loadChildren: () => import('../latihan/latihan.module').then(m => m.LatihanPageModule)
      },
      {
        path: 'kontak',
        loadChildren: () => import('../kontak/kontak.module').then(m => m.KontakPageModule)
      },
      {
        path: 'evaluasi',
        loadChildren: () => import('../evaluasi/evaluasi.module').then(m => m.EvaluasiPageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuPageRoutingModule {}
