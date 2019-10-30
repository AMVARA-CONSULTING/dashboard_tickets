import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    NgxChartsModule,
    MatTooltipModule,
    CommonModule
  ],
  exports: [
    NgxChartsModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
