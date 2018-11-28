import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackedComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private _config: ConfigService
  ) { }

  ngOnInit() {
  }
  multi = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  yAxisLabel = 'License Type';
  xAxisLabel = 'License Type';

  @Input() data: any[] = []
  @Input() prefix: string[] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue[0][0] === 'BARCHART') {
      const newData = changes.data.currentValue.filter(row => row[0] == 'BARCHART')
      const length = newData.length
      const series = []
      for (let i = 0; i < length; i++) {
        series.push({
          'name': moment(newData[i][1], 'YYYY-MM-DD').format('D'),
          'series': [
            {
              'name': 'Change',
              'value': newData[i][5]
            },
            {
              'name': 'Incident',
              'value': newData[i][3]
            },
            {
              'name': 'Problem',
              'value': newData[i][6]
            },
            {
              'name': 'Request',
              'value': newData[i][4]
            }
          ]
        })
      }
      this.multi = series.reverse()
    } else {
      const newData = changes.data.currentValue.reduce((r, a) => {
        let datum = +moment(a[2], 'DD.MM.YYYY HH:mm').format('DD')
        r[datum] = r[datum] || []
        r[datum].push(a)
        return r
      }, {})
      const length = newData.length
      const series = []
      for (let day in newData) {
        series.push({
          'name': day,
          'series': [
            {
              'name': 'Change',
              'value': newData[day].filter(row => row[this._config.config.columns.type] == 'Change').length
            },
            {
              'name': 'Incident',
              'value': newData[day].filter(row => row[this._config.config.columns.type] == 'Incident').length
            },
            {
              'name': 'Problem',
              'value': newData[day].filter(row => row[this._config.config.columns.type] == 'Problem').length
            },
            {
              'name': 'Request',
              'value': newData[day].filter(row => row[this._config.config.columns.type] == 'Request').length
            }
          ]
        })
      }
      this.multi = series
    }
  }

  colorScheme = {
    domain: ['#ffb74d', '#00bcd4', '#7e57c2', '#039be5']
  }

  go(e): void {
    this.router.navigate(['tickets', 'type', e.name])
  }

}
