import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [],
  imports: [
    NgxChartsModule,
    CommonModule
  ],
  exports: [
    NgxChartsModule
  ]
})
export class SharedModule { }
