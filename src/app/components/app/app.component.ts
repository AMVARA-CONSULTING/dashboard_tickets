import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '@services/config.service';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, group, animate, keyframes, animateChild } from '@angular/animations';
import { DataService } from '@services/data.service';
import { ReportsService } from '@services/reports.service';

@Component({
  selector: 'cism-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransitions', [
      transition('main => tickets', [
        group([
          query('@*', animateChild(), { optional: true }),
          query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 80px)' }), { optional: true }),
        ]),
        query(':leave', style({ transform: 'rotateY(0deg)' }), { optional: true }),
        query(':enter', style({ transform: 'rotateY(-90deg)' }), { optional: true }),
        query(':leave', animate('.3s ease-in', keyframes([
          style({ transform: 'rotateY(0deg)', offset: 0 }),
          style({ transform: 'rotateY(90deg)', offset: 1 })
        ])), { optional: true }),
        query(':enter', animate('.3s ease-out', keyframes([
          style({ transform: 'rotateY(-90deg)', offset: 0 }),
          style({ transform: 'rotateY(0deg)', offset: 1 })
        ])), { optional: true })
      ]),
      transition('tickets => main', [
        group([
          query('@*', animateChild(), { optional: true }),
          query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 80px)' }), { optional: true }),
        ]),
        query(':leave', style({ transform: 'rotateY(0deg)' }), { optional: true }),
        query(':enter', style({ transform: 'rotateY(90deg)' }), { optional: true }),
        query(':leave', animate('.3s ease-in', keyframes([
          style({ transform: 'rotateY(0deg)', offset: 0 }),
          style({ transform: 'rotateY(-90deg)', offset: 1 })
        ])), { optional: true }),
        query(':enter', animate('.3s ease-out', keyframes([
          style({ transform: 'rotateY(90deg)', offset: 0 }),
          style({ transform: 'rotateY(0deg)', offset: 1 })
        ])), { optional: true })
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    public config: ConfigService,
    public data: DataService,
    private reports: ReportsService
  ) {
    translate.setDefaultLang('en')
    translate.use(localStorage.getItem('lang') || config.config.language)
    this.reports.loadTickets().then(_ => this.data.loadingTickets = false)
  }

  trigger() {
    window.dispatchEvent(new Event('resize'))
  }

  getPage(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state
  }
}
