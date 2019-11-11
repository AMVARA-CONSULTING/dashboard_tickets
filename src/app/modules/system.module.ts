import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SystemWrapperComponent } from '@components/pages/system-wrapper/system-wrapper.component';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { SharedModule } from './shared.module';
import { SystemAvailabilityComponent } from '@components/system/system-availability/system-availability.component';
import { OverviewManagementComponent } from '@components/system/overview-management/overview-management.component';
import { SystemPerformanceComponent } from '@components/system/system-performance/system-performance.component';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { SystemAvailabilityChartComponent } from '@components/system/system-availability-chart/system-availability-chart.component';
import { SystemRobustnessComponent } from '../components/system/system-robustness/system-robustness.component';
import { SystemRobustnessChartComponent } from '../components/system/system-robustness-chart/system-robustness-chart.component';
import { SystemTicketColorsComponent } from '../components/system/system-ticket-colors/system-ticket-colors.component';
import { SystemRootCauseComponent } from '@components/system/system-root-cause/system-root-cause.component';

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
    SystemPerformanceComponent,
    SystemScrollerComponent,
    SystemAvailabilityChartComponent,
    SystemRobustnessComponent,
    SystemRobustnessChartComponent,
    SystemTicketColorsComponent,
    SystemPerformanceComponent,
    OverviewManagementComponent,
    SystemRootCauseComponent
  ],
  imports: [
    RouterModule.forChild(systemRoutes),
    SharedModule,
    CommonModule
  ],
  exports: []
})
export class SystemModule { }
