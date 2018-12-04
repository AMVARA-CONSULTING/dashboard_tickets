import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '@services/config.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { List } from 'immutable';
import { ClassificationGroup } from '@other/interfaces';

@Component({
  selector: 'cism-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassificationComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>()

  constructor(
    private data: DataService,
    private ac: ActivatedRoute,
    private config: ConfigService,
    private router: Router
  ) {
    this.groups$ = new BehaviorSubject<ClassificationGroup[]>([])
    this.ac.paramMap.subscribe(params => {
      this.type = params.get('type')
      this.filter = params.get('filter')
      this.rollup()
    })
    this.data.month.pipe(
      takeUntil(this.unsubscribe$)
    )
      .subscribe(_ => this.rollup())
  }

  type: string = ''
  filter: string = ''

  ngOnInit() {
  }

  rollup() {
    const month = this.data.month.getValue().month
    const rows: any[] = this.data[this.type].filter(row => row[1] === month)
    const total = rows.reduce((r, a) => r + parseInt(a[3], 10), 0)
    const groups: ClassificationGroup[] = []
    const length = rows.length
    for (let i = 0; i < length; i++) {
      groups.push({
        name: rows[i][2],
        total: (+rows[i][3]).toLocaleString(this.config.config.language),
        percent: +((+rows[i][3]) * 100 / total).toFixed(0)
      })
    }
    this.groups$.next(groups)
  }

  changeTickets(name: string): void {
    this.router.navigate(['tickets', this.type, name])
  }

  percent: string = ''
  total: string = ''

  ngOnDestroy() {
    if (this.unsubscribe$) this.unsubscribe$.next()
  }

  groups$: BehaviorSubject<ClassificationGroup[]>

  rippleColor: string = 'rgba(255,255,255,.08)'

}

