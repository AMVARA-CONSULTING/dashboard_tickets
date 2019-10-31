import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SystemWrapperComponent } from '@components/pages/system-wrapper/system-wrapper.component';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { SharedModule } from './shared.module';
import { SystemAvailabilityComponent } from '@components/system/system-availability/system-availability.component';
import { OverviewManagementComponent } from '@components/system/overview-management/overview-management.component';
import { SystemPerformanceComponent } from '@components/system/system-performance/system-performance.component';

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
    SystemGraphicHolderComponent,
    SystemAvailabilityComponent,
    OverviewManagementComponent,
    SystemPerformanceComponent
  ],
  imports: [
    RouterModule.forChild(systemRoutes),
    SharedModule,
    CommonModule
  ],
  exports: []
})
export class SystemModule { }
