import { Component, Input, OnChanges, SimpleChanges, Host } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { WorkerService } from '@services/worker.service';
import { BehaviorSubject } from 'rxjs';
import { SystemScrollerComponent } from '../system-scroller/system-scroller.component';
import { ConfigService } from '@services/config.service';
import { map } from 'rxjs/internal/operators/map';

declare const moment, classifyByIndex: any

@Component({
  selector: 'cism-system-robustness-chart',
  templateUrl: './system-robustness-chart.component.html',
  styleUrls: ['./system-robustness-chart.component.scss']
})
export class SystemRobustnessChartComponent implements OnChanges {

  constructor(
    private _data: DataService,
    private _worker: WorkerService,
    private _config: ConfigService,
    @Host() private _scroller: SystemScrollerComponent
  ) { }

  ngOnChanges() {
    // Run WebWorker
    this._worker.run<any[] | any>(data => {
      let groups = {}
      let classifiers = {
        monthly: 'YYYY[M]MM',
        daily: 'YYYY[M]MM[D]DD',
        weekly: 'YYYY[W]w'
      }
      // Get rows classified by month, week, or day
      groups = data.tickets.reduce((r, ticket) => {
        const momented = moment(ticket[2], ['DD.MM.YYYY HH:mm', 'MMM D, YYYY H:mm:ss A'])
        if (!momented.isValid()) return r
        const date = momented.format(classifiers[data.view])
        r[date] = r[date] || []
        r[date].push(ticket)
        return r
      }, {})
      // Get keys of classifying indexes
      const keys = Object.keys(groups)
      // Apply sorting, normally it's done by the browser, by just to make sure
      keys.sort((a, b) => {
        const left = moment(a, classifiers[data.view])
        const right = moment(b, classifiers[data.view])
        return left.valueOf() - right.valueOf()
      })
      const chartData = keys.map( key => {
        const group = groups[key]
        groups[key] = classifyByIndex(group, data.columns.type)
        for (let prop2 in groups[key]) {
          groups[key][prop2] = groups[key][prop2].length
        }
        return {
          name: key,
          series: Object.keys(groups[key]).map( key2 => ({ name: key2, value: groups[key][key2] }) )
        }
      })
      return chartData
    }, {
      tickets: this._data.allTickets,
      view: this.type,
      columns: Object.assign({}, this._config.config.columns)
    }, ['moment', 'classify']).pipe(
      // Take only last 12 units, example: months, weeks, days,...
      map(results => results.slice(Math.max(results.length - this._config.config.system.unitsPast, 1)))
    ).subscribe(results => {
      this._scroller.bars.next(results.length)
      this.data.next(results)
    })
  }
  
  @Input() type: SAViewType

  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }

  data = new BehaviorSubject<any[]>([])

  xAxisFormatting = val => {
    switch (this.type) {
      case "daily":
        return moment(val, 'YYYY[M]MM[D]DD').locale('de').format('DD/MM/YYYY')
      case "monthly":
        return moment(val, 'YYYY[M]MM').locale('de').format('MMM YYYY')
      case "weekly":
        return moment(val, 'YYYY[W]w').locale('de').format('DD/MM/YYYY')
    }
  }

}
