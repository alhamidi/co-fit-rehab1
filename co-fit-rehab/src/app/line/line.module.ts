import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinePageRoutingModule } from './line-routing.module';

import { LinePage } from './line.page';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { 
  IgxCategoryChartModule,
  IgxLegendModule
 } from "igniteui-angular-charts";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinePageRoutingModule,

    // BrowserAnimationsModule,
    IgxCategoryChartModule,
    IgxLegendModule,
  ],
  declarations: [LinePage]
})
export class LinePageModule {}
