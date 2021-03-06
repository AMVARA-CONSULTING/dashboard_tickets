import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { trigger, transition, query, style, group, animate, keyframes, animateChild } from '@angular/animations';
import { DataService } from '@services/data.service';
import { ToolsService } from '@services/tools.service';
import { interval } from 'rxjs/internal/observable/interval';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/internal/operators/retry';
import { Store, Select } from '@ngxs/store';
import { Config } from '@other/interfaces';
import { ConfigState } from '@states/config.state';
import { Observable } from 'rxjs/internal/Observable';

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
          query(':enter', style({ position: 'fixed', width: '100%', opacity: 0 }), { optional: true }),
          query(':leave', style({ position: 'fixed', opacity: 1 }), { optional: true }),
        ]),
        query(':leave', style({ transform: 'rotateY(0deg)' }), { optional: true }),
        query(':enter', style({ transform: 'rotateY(-90deg)' }), { optional: true }),
        query(':leave', animate('.3s ease-in', keyframes([
          style({ transform: 'rotateY(0deg)', opacity: 1 }),
          style({ transform: 'rotateY(90deg)', opacity: 0 })
        ])), { optional: true }),
        query(':enter', animate('.3s ease-out', keyframes([
          style({ transform: 'rotateY(-90deg)', opacity: 0 }),
          style({ transform: 'rotateY(0deg)', opacity: 1 })
        ])), { optional: true })
      ]),
      transition('tickets => main', [
        group([
          query('@*', animateChild(), { optional: true }),
          query(':enter', style({ position: 'fixed', opacity: 0 }), { optional: true }),
          query(':leave', style({ position: 'fixed', width: '100%', opacity: 1 }), { optional: true })
        ]),
        query(':leave', style({ transform: 'rotateY(0deg)' }), { optional: true }),
        query(':enter', style({ transform: 'rotateY(90deg)' }), { optional: true }),
        query(':leave', animate('.3s ease-in', keyframes([
          style({ transform: 'rotateY(0deg)', opacity: 1 }),
          style({ transform: 'rotateY(-90deg)', opacity: 0 })
        ])), { optional: true }),
        query(':enter', animate('.3s ease-out', keyframes([
          style({ transform: 'rotateY(90deg)', opacity: 0 }),
          style({ transform: 'rotateY(0deg)', opacity: 1 })
        ])), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  
  @Select(ConfigState) config$: Observable<Config>

  constructor(
    private translate: TranslateService,
    public data: DataService,
    private router: Router,
    private tools: ToolsService,
    private _http: HttpClient,
    private _store: Store
  ) {
    const config = this._store.selectSnapshot<Config>(store => store.config)
    this.translate.setDefaultLang('en')
    this.translate.use(localStorage.getItem('lang') || config.language)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) this.data.loading.next(true)
      if (event instanceof NavigationEnd) this.data.loading.next(false)
    })
    if (config.heartbeat > 0 && location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
      interval(config.heartbeat ).subscribe(_ => {
        this._http.get(`${config.fullUrl}${config.portalFolder}${config.protectedUrl}`)
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

  getPage(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state
  }

  navigate(url: string): void {
    this.data.loading.next(true)
    this.router.navigate([url])
    this.data.opened.next(false)
  }
}
