import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '@services/config.service';
import { RouterOutlet, Router } from '@angular/router';
import { trigger, transition, query, style, group, animate, keyframes, animateChild } from '@angular/animations';
import { DataService } from '@services/data.service';
import { ReportsService } from '@services/reports.service';
import { ToolsService } from 'app/tools.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cism-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ]
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    public config: ConfigService,
    public data: DataService,
    private reports: ReportsService,
    private router: Router,
    private tools: ToolsService,
    private http: HttpClient
  ) {
    translate.setDefaultLang('en')
    translate.use(localStorage.getItem('lang') || config.config.language)
  }

  trigger() {
    if (!this.tools.isIE()) window.dispatchEvent(new Event('resize'))
  }

  getPage(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state
  }

  navigate(url: string): void {
    this.router.navigate([url])
    this.data.opened.next(false)
  }
}
