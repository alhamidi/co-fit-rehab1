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
  },
  {
    path: 'listvideo',
    loadChildren: () => import('./listvideo/listvideo.module').then( m => m.ListvideoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'skala-borg',
    loadChildren: () => import('./skala-borg/skala-borg.module').then( m => m.SkalaBorgPageModule)
  },
  {
    path: 'pendinginan',
    loadChildren: () => import('./pendinginan/pendinginan.module').then( m => m.PendinginanPageModule)
  },
  {
    path: 'pascapendinginan',
    loadChildren: () => import('./pascapendinginan/pascapendinginan.module').then( m => m.PascapendinginanPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatihanPageRoutingModule {}
