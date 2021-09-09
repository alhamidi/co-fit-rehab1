import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformUrlPipe } from './pipes/transform-url.pipe';



@NgModule({
  declarations: [
    TransformUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransformUrlPipe
  ]
})
export class SharedModule { }
