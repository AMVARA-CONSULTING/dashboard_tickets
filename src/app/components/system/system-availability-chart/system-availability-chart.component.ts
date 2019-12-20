import { Component, OnInit, ChangeDetectionStrategy, Input, Host } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ToolsService } from '@services/tools.service';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { ConfigService } from '@services/config.service';
import { parse, format, getYear, getWeek, setWeek, startOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';

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
          let date: any = parse(row[1], this._config.config.system.S2.formatDate, new Date())
          date = format(date, 'dd/MM/yyyy')
          return {
            name: date,
            value: Math.round(row[2] * 100) / 100
          }
        })
        // this.translate.next(true)
        // this.xAxisLabels.next(this.getLabelsFor('weeks'))
        break
      case "weekly":
      case "monthly":
        // let labels: any = this.type == 'weekly' ? 'weeks' : 'months'
        let formatDate = this.type == 'weekly' ? this._config.config.system.S2.formatDate : 'dd/MM/yyyy'
        const grouped_data = this.data.reduce((r, a) => {
          let date: any = parse(a[1], this._config.config.system.S2.formatDate, new Date())
          if (this.type == 'weekly') {
            date = `${getYear(date)}${getWeek(date)}`
          } else {
            date = format(date, 'yyyyMM')
          }
          r[date] = r[date] || []
          r[date].push(a)
          return r
        }, {})
        newData = Object.keys(grouped_data).map(prop => {
          let date
          if (this.type == 'weekly') {
            date = parse(prop.substr(0, 4), 'yyyy', new Date())
            date = setWeek(date, +prop.substr(4, 2))
            date = startOfWeek(date)
            date = format(date, formatDate)
          } else {
            date = parse(prop, 'yyyyMM', new Date())
            date = format(date, formatDate)
          }
          return {
            name: date,
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
    let date = parse(val, this._config.config.system.S2.formatDate, new Date())
    switch (this.type) {
      case "daily":
        return val
      case "monthly":
        return format(date, 'MMM yyyy', { locale: de })
      case "weekly":
        return format(date, 'dd/MM/yyyy', { locale: de })
    }
  }

}
