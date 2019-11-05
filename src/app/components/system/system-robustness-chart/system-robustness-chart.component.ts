import { Component, Input, OnChanges, SimpleChanges, Host } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { WorkerService } from '@services/worker.service';
import { BehaviorSubject } from 'rxjs';
import { SystemScrollerComponent } from '../system-scroller/system-scroller.component';

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
    @Host() private _scroller: SystemScrollerComponent
  ) { }

  ngOnChanges() {
    console.log(this._data.allTickets)
    this._worker.run<any[] | any>(data => {
      let groups = {}
      switch (data.view) {
        case "monthly":
          groups = data.tickets.reduce((r, ticket) => {
            const momented = moment(ticket[2])
            if (!momented.isValid()) return r
            const month = momented.format('YYYY[M]MM')
            r[month] = r[month] || []
            r[month].push(ticket)
            return r
          }, {})
          break
        case "daily":
          groups = data.tickets.reduce((r, ticket) => {
            const momented = moment(ticket[2])
            if (!momented.isValid()) return r
            const date = momented.format('YYYY[M]MM[D]DD')
            r[date] = r[date] || []
            r[date].push(ticket)
            return r
          }, {})
          break
        case "weekly":
          groups = data.tickets.reduce((r, ticket) => {
            const momented = moment(ticket[2])
            if (!momented.isValid()) return r
            const date = momented.format('YYYY[W]w')
            r[date] = r[date] || []
            r[date].push(ticket)
            return r
          }, {})
          break
      }
      const keys = Object.keys(groups)
      if (data.view == 'weekly') {
        keys.sort((a, b) => {
          const left = moment(a, 'YYYY[W]w')
          const right = moment(b, 'YYYY[W]w')
          return left.valueOf() - right.valueOf()
        })
      } else {
        keys.sort()
      }
      const chartData = keys.map( key => {
        const group = groups[key]
        groups[key] = classifyByIndex(group, 4)
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
      view: this.type
    }, ['moment', 'classify']).subscribe(results => {
      console.log(results)
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