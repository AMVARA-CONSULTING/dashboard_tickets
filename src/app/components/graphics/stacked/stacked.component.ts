import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ConfigService } from '@services/config.service';
import { Subscription } from 'rxjs';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackedComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private _config: ConfigService,
    private data: DataService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.data.month.subscribe(month => {
      const barchartData = this.data.chart.filter(row => row[2] == month.month)
      const length = barchartData.length
      const series = []
      for (let i = 0; i < length; i++) {
        series.push({
          'name': moment(barchartData[i][1], 'YYYY-MM-DD').format('D'),
          'series': [
            {
              'name': 'Change',
              'value': barchartData[i][5]
            },
            {
              'name': 'Incident',
              'value': barchartData[i][3]
            },
            {
              'name': 'Problem',
              'value': barchartData[i][6]
            },
            {
              'name': 'Request',
              'value': barchartData[i][4]
            }
          ]
        })
      }
      this.multi = series.reverse()
      if (!this.ref['destroyed']) this.ref.detectChanges()
    })
  }
  multi = []

  private monthSubscription: Subscription

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#ffb74d', '#00bcd4', '#7e57c2', '#039be5']
  }

  go(e): void {
    this.data.loading.next(true)
    this.router.navigate(['tickets', 'type', e.name])
  }

}
