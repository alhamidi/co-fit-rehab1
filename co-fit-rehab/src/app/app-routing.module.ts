import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'pralatihan',
    loadChildren: () => import('./pralatihan/pralatihan.module').then( m => m.PralatihanPageModule)
  },
  {
    path: 'pascalatihan',
    loadChildren: () => import('./pascalatihan/pascalatihan.module').then( m => m.PascalatihanPageModule)
  },

  // {
  //   path: 'kontak',
  //   loadChildren: () => import('./kontak/kontak.module').then( m => m.KontakPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
