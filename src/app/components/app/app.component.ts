import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '@services/config.service';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { trigger, transition, query, style, group, animate, keyframes, animateChild } from '@angular/animations';
import { DataService } from '@services/data.service';
import { ToolsService } from '@services/tools.service';
import memo from 'memo-decorator';
import { interval } from 'rxjs/internal/observable/interval';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/internal/operators/retry';

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
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public config: ConfigService,
    public data: DataService,
    private router: Router,
    private tools: ToolsService,
    private _http: HttpClient
  ) {
    this.translate.setDefaultLang('en')
    this.translate.use(localStorage.getItem('lang') || config.config.language)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) this.data.loading.next(true)
      if (event instanceof NavigationEnd) this.data.loading.next(false)
    })
    if (this.config.config.heartbeat > 0) {
      interval(this.config.config.heartbeat ).subscribe(_ => {
        this._http.get(`${this.config.config.fullUrl}${this.config.config.portalFolder}v1/notifications`)
        .pipe(
          retry(3)
          )
        .subscribe()
      })
    }
  }

  trigger() {
    if (!this.tools.isIE()) window.dispatchEvent(new Event('resize'))
  }

  ngOnInit() {
    const int = interval(50).subscribe(_ => {
      if (this.data.availableMonths.length > 0) {
        this.data.month.next({
          month: this.data.availableMonths[0],
          index: 0
        })
        int.unsubscribe()
      }
    })
  }

  @memo()
  getPage(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state
  }

  navigate(url: string): void {
    this.data.loading.next(true)
    this.router.navigate([url])
    this.data.opened.next(false)
  }
}
