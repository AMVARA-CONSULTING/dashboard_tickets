import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'cism-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackedComponent implements OnInit, OnChanges {

  constructor() { }

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

  @Input() data: any[] = [];
  @Input() prefix: string[] = []

  ngOnChanges(changes: SimpleChanges) {
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
    this.multi = series
  }

  colorScheme = {
    domain: ['#ffb74d', '#00bcd4', '#7e57c2', '#039be5']
  }

}
