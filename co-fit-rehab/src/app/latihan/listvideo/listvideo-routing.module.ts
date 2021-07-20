import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListvideoPage } from './listvideo.page';

const routes: Routes = [
  {
    path: '',
    component: ListvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListvideoPageRoutingModule {}
