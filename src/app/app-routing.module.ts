import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '@components/pages/about/about.component';
import { MainComponent } from '@components/pages/main/main.component';
import { HelpComponent } from '@components/pages/help/components/help/help.component';
import { TicketsComponent } from '@components/pages/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    data: { state: 'main' }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: { state: 'tickets' }
  },
  {
    path: 'tickets/:type/:filter',
    component: TicketsComponent,
    data: { state: 'tickets' }
  },
  {
    path: 'system',
    loadChildren: () => import('@modules/system.module').then(m => m.SystemModule)
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "help",
    loadChildren: () => import('@components/pages/help/help.module').then(m => m.HelpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
