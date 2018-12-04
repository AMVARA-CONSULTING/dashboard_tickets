import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '@services/config.service';

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
    private config: ConfigService
  ) {
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
    const part = rows.filter(row => row[2] == this.filter)[0]
    this.percent = ((+part[3]) * 100 / total).toFixed(0)
    this.total = (+part[3]).toLocaleString(this.config.config.language)
  }

  percent: string = ''
  total: string = ''

  ngOnDestroy() {
    if (this.unsubscribe$) this.unsubscribe$.unsubscribe()
  }

}
