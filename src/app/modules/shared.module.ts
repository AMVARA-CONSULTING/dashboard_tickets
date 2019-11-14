import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    NgxChartsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [
    NgxChartsModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
