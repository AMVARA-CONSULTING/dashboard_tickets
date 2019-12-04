import { Component, OnInit, ChangeDetectionStrategy, Input, Host } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as moment from 'moment';
import { ToolsService } from '@services/tools.service';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-system-availability-chart',
  templateUrl: './system-availability-chart.component.html',
  styleUrls: ['./system-availability-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityChartComponent implements OnInit {

  constructor(
    private _tools: ToolsService,
    private _config: ConfigService,
    @Host() private _scroller: SystemScrollerComponent 
  ) { }

  ngOnInit() {
    let newData = []
    switch (this.type) {
      case "daily":
        newData = this.data.map(row => {
          return {
            name: moment(row[1], this._config.config.system.S2.formatDate).format('DD/MM/YYYY'),
            value: Math.round(row[2] * 100) / 100
          }
        })
        // this.translate.next(true)
        // this.xAxisLabels.next(this.getLabelsFor('weeks'))
        break
      case "weekly":
      case "monthly":
        let formatToBeUnique = this.type == 'weekly' ? 'YYYY-w' : 'YYYYMM'
        let formatDate = this.type == 'weekly' ? this._config.config.system.S2.formatDate : 'DD/MM/YYYY'
        // let labels: any = this.type == 'weekly' ? 'weeks' : 'months'
        const grouped_data = this.data.reduce((r, a) => {
          const formattedDate = moment(a[1], this._config.config.system.S2.formatDate).format(formatToBeUnique)
          r[formattedDate] = r[formattedDate] || []
          r[formattedDate].push(a)
          return r
        }, {})
        newData = Object.keys(grouped_data).map(prop => {
          return {
            name: moment(prop, formatToBeUnique).format(formatDate),
            value: this._tools.averageByIndex(grouped_data[prop], 2, true),
            min: this._tools.getMin(grouped_data[prop], 2, true),
            max: this._tools.getMax(grouped_data[prop], 2, true)
          }
        })
        // this.xAxisLabels.next(this.getLabelsFor(labels))
        // this.translate.next(false)
        break
      default:
    }
    if (newData.length > this._config.config.system.unitsPast) {
      newData = newData.slice(Math.max(newData.length - this._config.config.system.unitsPast, 1))
    }
    let minValue = Math.round(this._tools.getMin(this.data, 2))
    if (minValue > 5) minValue -= 5
    this.minScale.next(minValue)
    this.yAxisTicks.next([minValue, 100])
    this._scroller.bars.next(newData.length)
    this.chartData.next([
      {
        name: "System Availability",
        series: newData
      }
    ])
  }

  minScale = new BehaviorSubject<number>(0)
  yAxisTicks = new BehaviorSubject<number[]>([])

  // xAxisLabels = new BehaviorSubject<Date[]>([])

  // translate = new BehaviorSubject<boolean>(false)
  chartData = new BehaviorSubject<Object[]>([])

  @Input() data: any[] = []
  @Input() type: SAViewType

  colorScheme = {
    domain: ['#00bcd4']
  }

  yAxisFormatting = val => {
    switch (this.type) {
      case "daily":
        return `${val} %`
      case "monthly":
        return `AVG ${val} %`
      case "weekly":
        return `AVG ${val} %`
    }
  }
  xAxisFormatting = val => {
    const momented = moment(val, this._config.config.system.S2.formatDate)
    switch (this.type) {
      case "daily":
        return val
      case "monthly":
        return momented.locale('de').format('MMM YYYY')
      case "weekly":
        return momented.locale('de').format('DD/MM/YYYY')
    }
  }

}
