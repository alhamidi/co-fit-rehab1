import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatihanPage } from './latihan.page';

const routes: Routes = [
  {
    path: '',
    component: LatihanPage,
  },
  {
    path: 'pralatihan',
    loadChildren: () => import('./pralatihan/pralatihan.module').then( m => m.PralatihanPageModule)
  },
  {
    path: 'pascalatihan',
    loadChildren: () => import('./pascalatihan/pascalatihan.module').then( m => m.PascalatihanPageModule)
  },  {
    path: 'videolatihan',
    loadChildren: () => import('./videolatihan/videolatihan.module').then( m => m.VideolatihanPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatihanPageRoutingModule {}
