import { Component, Input, OnChanges, Host, ChangeDetectionStrategy } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { ConfigService } from '@services/config.service';
import { ToolsService } from '@services/tools.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import dayjs from 'dayjs';

@Component({
  selector: 'cism-system-robustness-chart',
  templateUrl: './system-robustness-chart.component.html',
  styleUrls: ['./system-robustness-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessChartComponent implements OnChanges {

  constructor(
    private _data: DataService,
    private _config: ConfigService,
    private _tools: ToolsService,
    @Host() private _scroller: SystemScrollerComponent
  ) { }

  ngOnChanges() {
    setTimeout(_ => {
      let groups = {}
      let classifiers = {
        monthly: 'YYYY[M]MM',
        daily: 'YYYY[M]MM[D]DD',
        weekly: 'YYYYw'
      }
      // Get rows classified by month, week, or day
      groups = this._data.allTickets.reduce((r, ticket) => {
        const dateParsed = dayjs(ticket[2], 'DD.MM.YYYY HH:mm')
        if (!dateParsed.isValid()) {
          return r
        }
        const date = dateParsed.format(classifiers[this.type])
        r[date] = r[date] || []
        r[date].push(ticket)
        return r
      }, {})
      // Get keys of classifying indexes
      const keys = Object.keys(groups)
      // Apply sorting, normally it's done by the browser, by just to make sure
      keys.sort((a, b) => {
        const left = this.type == 'weekly' ? dayjs(a.substr(0, 4), 'YYYY').week(+a.substr(4,2)) : dayjs(a, classifiers[this.type])
        const right = this.type == 'weekly' ? dayjs(b.substr(0, 4), 'YYYY').week(+b.substr(4,2)) : dayjs(b, classifiers[this.type])
        return left.valueOf() - right.valueOf()
      })
      let chartData = keys.map( key => {
        const group = groups[key]
        groups[key] = this._tools.classifyByIndex(group, this._config.config.columns.type)
        for (let prop2 in groups[key]) {
          groups[key][prop2] = groups[key][prop2].length
        }
        return {
          name: key,
          series: Object.keys(groups[key]).map( key2 => ({ name: key2, value: groups[key][key2] }) )
        }
      })
      // Take only last 12 units, example: months, weeks, days,...
      chartData = chartData.slice(Math.max(chartData.length - this._config.config.system.unitsPast, 1))
      this._scroller.bars.next(chartData.length)
      this.data.next(chartData)
    }, 200)
  }
  
  @Input() type: SAViewType

  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }

  data = new BehaviorSubject<any[]>([])

  xAxisFormatting = (val: string) => {
    switch (this.type) {
      case "daily":
        return dayjs(val, 'YYYY[M]MM[D]DD').format('DD/MM/YYYY')
      case "monthly":
        return dayjs(val, 'YYYY[M]MM').format('MMM YYYY')
      case "weekly":
        return dayjs(val.substr(0, 4), 'YYYY').week(+val.substr(4,2)).format('DD/MM/YYYY')
    }
  }

}
