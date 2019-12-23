import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ClassificationGroup, Config, GlobalState } from '@other/interfaces';
import { SubSink } from '@services/tools.service';
import { Select, Store } from '@ngxs/store';
import { ConfigState } from '@states/config.state';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'cism-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassificationComponent implements OnDestroy {

  subs = new SubSink()

  @Select(ConfigState.getLanguage) language$: Observable<string>

  constructor(
    private data: DataService,
    private ac: ActivatedRoute,
    private router: Router,
    private _store: Store
  ) {
    this.groups$ = new BehaviorSubject<ClassificationGroup[]>([])
    this.subs.sink = this.ac.paramMap.subscribe(params => {
      this.type.next(params.get('type'))
      this.filter.next(params.get('filter'))
    })
    this.config = this._store.selectSnapshot<Config>(state => state.config)
    this.subs.sink = this.data.month.subscribe(_ => this.rollup())
  }

  config: Config

  type = new BehaviorSubject<string>('')
  filter = new BehaviorSubject<string>('')

  rollup() {
    const month = this.data.month.getValue().month
    this.subs.sink = this.type.pipe(
      switchMap(type => this._store.select((state: GlobalState) => state.tickets[type])),
      map(rows => rows.filter(row => row[1] === month))
    ).subscribe(rows => {
      const total = rows.reduce((r, a) => r + parseInt(a[3], 10), 0)
      const groups: ClassificationGroup[] = []
      const length = rows.length
      for (let i = 0; i < length; i++) {
        groups.push({
          name: rows[i][2],
          total: (+rows[i][3]).toLocaleString(this.config.language),
          percent: +((+rows[i][3]) * 100 / total).toFixed(0)
        })
      }
      this.groups$.next(groups)
    })
  }

  changeTickets(name: string): void {
    this.router.navigate(['tickets', this.type.getValue(), name])
  }

  percent: string = ''
  total: string = ''

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  groups$: BehaviorSubject<ClassificationGroup[]>

  rippleColor: string = 'rgba(255,255,255,.08)'

}

