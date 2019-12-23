import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { SubSink } from '@services/tools.service';
import { Select, Store } from '@ngxs/store';
import { ConfigState } from '@states/config.state';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs/internal/operators/combineLatest';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StadisticBoxComponent implements OnInit, OnDestroy {

  @Select(ConfigState.getLanguage) language$: Observable<string>

  subs = new SubSink()

  ngOnDestroy = () => this.subs.unsubscribe()

  constructor(
    private router: Router,
    private data: DataService,
    private _store: Store
  ) { }

  ngOnInit() {
    this.subs.sink = this.data.month.pipe(
      combineLatest(
        this._store.select(store => store.tickets.priority),
        this._store.select(store => store.tickets.status),
        this._store.select(store => store.tickets.type),
        this._store.select(store => store.tickets.service)
      )
    ).subscribe(([month, priority, status, type, service]) => this.rollup(priority, status, type, service))
  }

  @Input() title: string = ''
  @Input() go: string = ''

  rows = new BehaviorSubject<any[]>([])

  rippleColor: string = 'rgba(255,255,255,.06)'

  goA(row): void {
    this.data.count = row.count
    this.data.percent = row.percent
    this.data.loading.next(true)
    this.router.navigate(['tickets', this.go, row.name])
  }

  rollup(priority, status, type, service) {
    const month = this.data.month.getValue().month
    let stats = []
    switch (this.go) {
      case "priority":
        stats = priority
        break
      case "status":
        stats = status
        break
      case "type":
        stats = type
        break
      case "service":
        stats = service
        break
    }
    stats = stats.filter(row => row[1] == month)
    const newRows = []
    const length = stats.length
    const total = stats.reduce((r, a) => r + parseInt(a[3], 10), 0)
    const lang = this._store.selectSnapshot<string>(state => state.config.language)
    for (let i = 0; i < length; i++) {
      newRows.push({
        name: stats[i][2],
        count: stats[i][3].toLocaleString(lang),
        percent: (stats[i][3] * 100 / total).toFixed(0)
      })
    }
    this.rows.next(newRows)
  }

}
