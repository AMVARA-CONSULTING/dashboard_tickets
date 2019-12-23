import { Component, Input, OnChanges, Host, ChangeDetectionStrategy } from '@angular/core';
import { SAViewType, Config } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { ToolsService } from '@services/tools.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { format, parse, isValid, setWeek, getYear, getWeek, setYear } from 'date-fns';
import { Store } from '@ngxs/store';

@Component({
  selector: 'cism-system-robustness-chart',
  templateUrl: './system-robustness-chart.component.html',
  styleUrls: ['./system-robustness-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessChartComponent implements OnChanges {

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _store: Store,
    @Host() private _scroller: SystemScrollerComponent
  ) { }

  ngOnChanges() {
    setTimeout(_ => {
      let groups = {}
      let classifiers = {
        monthly: "yyyy'M'MM",
        daily: "yyyy'M'MM'D'dd"
      }
      // Get rows classified by month, week, or day
      groups = this._tools.primitiveReduce(this._data.allTicketsReduced, (r, ticket) => {
        const dateParsed = parse(ticket[0], 'dd.MM.yyyy HH:mm', new Date())
        if (!isValid(dateParsed)) {
          return r
        }
        let date
        if (this.type == 'weekly') {
          date = `${getYear(dateParsed)}${getWeek(dateParsed)}`
        } else {
          date = format(dateParsed, classifiers[this.type])
        }
        r[date] = r[date] || []
        r[date].push(ticket)
        return r
      }, {})
      // Get keys of classifying indexes
      const keys = Object.keys(groups)
      // Apply sorting, normally it's done by the browser, by just to make sure
      keys.sort((a, b) => {
        let left, right
        if (this.type == 'weekly') {
          left = setWeek(parse(a.substr(0, 4), 'yyyy', new Date()), +a.substr(4,2))
          right = setWeek(parse(b.substr(0, 4), 'yyyy', new Date()), +b.substr(4,2))
        } else {
          left = parse(a, classifiers[this.type], new Date())
          right = parse(b, classifiers[this.type], new Date())
        }
        return left.valueOf() - right.valueOf()
      })
      let chartData = keys.map( key => {
        const group = groups[key]
        groups[key] = this._tools.classifyByIndex(group, 1)
        for (let prop2 in groups[key]) {
          groups[key][prop2] = groups[key][prop2].length
        }
        return {
          name: key,
          series: Object.keys(groups[key]).map( key2 => ({ name: key2, value: groups[key][key2] }) )
        }
      })
      // Take only last 12 units, example: months, weeks, days,...
      const config = this._store.selectSnapshot<Config>(store => store.config)
      chartData = chartData.slice(Math.max(chartData.length - config.system.unitsPast, 1))
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
    let date;
    switch (this.type) {
      case "daily":
        date = parse(val, "yyyy'M'MM'D'dd", new Date())
        return format(date, "dd'/'MM'/'yyyy")
      case "monthly":
        return format(parse(val, "yyyy'M'MM", new Date()), 'MMM yyyy')
      case "weekly":
        const year = +val.substr(0, 4)
        const week = +val.substr(4, 2)
        date = setYear(new Date(), year)
        date = setWeek(date, week)
        return format(date, "dd'/'MM'/'yyyy")
    }
  }

}
