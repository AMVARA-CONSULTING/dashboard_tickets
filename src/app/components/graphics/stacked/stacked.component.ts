import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { SubSink } from '@services/tools.service';
import { parse, format } from 'date-fns';
import { Store, Select } from '@ngxs/store';
import { TicketsState } from '@states/tickets.state';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs/internal/operators/combineLatest';
import { GlobalState } from '@other/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'cism-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackedComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor(
    private router: Router,
    private data: DataService,
    private _store: Store
  ) { }

  @Select(TicketsState.StackedChart) chart$: Observable<any[]>

  ngOnInit() {
    this.subs.sink = this.data.month.pipe(
      combineLatest(
        this._store.select((state: GlobalState) => state.tickets.chart)
      )
    ).subscribe(([month, chart]) => {
      const barchartData = chart.filter(row => row[2] == month.month)
      const length = barchartData.length
      const series = []
      for (let i = 0; i < length; i++) {
        let date: any = parse(barchartData[i][1], "yyyy'-'MM'-'dd", new Date())
        date = format(date, 'd')
        series.push({
          'name': date,
          'series': [
            {
              'name': 'Change',
              'value': +barchartData[i][5]
            },
            {
              'name': 'Incident',
              'value': +barchartData[i][3]
            },
            {
              'name': 'Problem',
              'value': +barchartData[i][6]
            },
            {
              'name': 'Request',
              'value': +barchartData[i][4]
            }
          ]
        })
      }
      this.multi.next(series.reverse())
    })
  }

  multi = new BehaviorSubject<any[]>([])

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }

  go(e): void {
    this.data.loading.next(true)
    this.router.navigate(['tickets', 'type', e.name])
  }

}
