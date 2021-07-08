import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        redirectTo: '/tabs/latihan',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/latihan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
