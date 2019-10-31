import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as moment from 'moment';
import { ToolsService } from 'app/tools.service';

@Component({
  selector: 'cism-system-availability-chart',
  templateUrl: './system-availability-chart.component.html',
  styleUrls: ['./system-availability-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityChartComponent implements OnInit {

  constructor(
    private _tools: ToolsService
  ) { }

  ngOnInit() {
    let newData = []
    switch (this.type) {
      case "daily":
        newData = this.data.map(row => {
          return {
            name: moment(row[1], 'MM/DD/YYYY').format('DD/MM/YYYY'),
            value: Math.round(row[2] * 100) / 100
          }
        })
        this.translate.next(true)
        this.xAxisLabels.next(this.getLabelsFor('weeks'))
        break
      case "weekly":
        const grouped_week = this.data.reduce((r, a) => {
          const formattedDate = moment(a[1], 'MM/DD/YYYY').format('YYYY-w')
          r[formattedDate] = r[formattedDate] || []
          r[formattedDate].push(a)
          return r
        }, {})
        for (const month in grouped_week) {
          newData.push({
            name: moment(month, 'YYYYw').format('DD/MM/YYYY'),
            value: this._tools.averageByIndex(grouped_week[month], 2, true),
            min: this._tools.getMin(grouped_week[month], 2, true),
            max: this._tools.getMax(grouped_week[month], 2, true)
          })
        }
        this.xAxisLabels.next(this.getLabelsFor('weeks'))
        this.translate.next(false)
        break
      case "monthly":
        const grouped_month = this.data.reduce((r, a) => {
          const formattedDate = moment(a[1], 'MM/DD/YYYY').format('YYYYMM')
          r[formattedDate] = r[formattedDate] || []
          r[formattedDate].push(a)
          return r
        }, {})
        for (const month in grouped_month) {
          newData.push({
            name: moment(month, 'YYYYMM').format('DD/MM/YYYY'),
            value: this._tools.averageByIndex(grouped_month[month], 2, true),
            min: this._tools.getMin(grouped_month[month], 2, true),
            max: this._tools.getMax(grouped_month[month], 2, true)
          })
        }
        this.xAxisLabels.next(this.getLabelsFor('months'))
        this.translate.next(false)
        break
      default:
    }
    let minValue = Math.round(this._tools.getMin(this.data, 2))
    if (minValue > 5) minValue -= 5
    this.minScale.next(minValue)
    this.yAxisTicks.next([minValue, 100])
    this.chartData.next([
      {
        name: "System Availability",
        series: newData
      }
    ])
  }

  minScale = new BehaviorSubject<number>(0)
  yAxisTicks = new BehaviorSubject<number[]>([])

  xAxisLabels = new BehaviorSubject<Date[]>([])

  translate = new BehaviorSubject<boolean>(false)
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
    const momented = moment(val, 'DD/MM/YYYY')
    switch (this.type) {
      case "daily":
        return val
      case "monthly":
        return momented.format('MMM YYYY')
      case "weekly":
        return momented.format('DD/MM/YYYY')
    }
  }

  getLabelsFor(type: 'weeks' | 'months'): Date[] {
    const dates = []
    if (type == 'weeks') {
      const grouped_weeks = this.data.reduce((r, a) => {
        const formattedDate = moment(a[1], 'MM/DD/YYYY').format('YYYYw')
        r[formattedDate] = r[formattedDate] || []
        r[formattedDate] = a
        return r
      }, {})
      for (const group in grouped_weeks) {
        dates.push(moment(grouped_weeks[group][1], 'MM/DD/YYYY').format('DD/MM/YYYY'))
      }
    } else {
      const grouped_weeks = this.data.reduce((r, a) => {
        const formattedDate = moment(a[1], 'MM/DD/YYYY').format('YYYYMM')
        r[formattedDate] = r[formattedDate] || []
        r[formattedDate] = a
        return r
      }, {})
      for (const group in grouped_weeks) {
        dates.push(moment(grouped_weeks[group][1], 'MM/DD/YYYY').format('MMM YYYY'))
      }
    }
    return dates
  }

}
