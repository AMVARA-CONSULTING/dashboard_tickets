import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SystemWrapperComponent } from '@components/pages/system-wrapper/system-wrapper.component';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';

const systemRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: SystemWrapperComponent
  }
]

@NgModule({
  declarations: [
    SystemWrapperComponent,
    SystemGraphicHolderComponent
  ],
  imports: [
    RouterModule.forChild(systemRoutes),
    CommonModule
  ],
  exports: [
    SystemWrapperComponent
  ]
})
export class SystemModule { }
