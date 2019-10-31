import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs';
import { WorkerService } from '@services/worker.service';
import { SAPercents, SAViewType } from '@other/interfaces';

declare const moment, formatPercent: any

@Component({
  selector: 'cism-system-availability',
  templateUrl: './system-availability.component.html',
  styleUrls: ['./system-availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _worker: WorkerService
  ) { }

  percents = new BehaviorSubject<SAPercents>(null)

  SystemAvailabilityRows = new BehaviorSubject<any[]>([])

  view = new BehaviorSubject<SAViewType>('overview');

  ngOnInit() {
    this._worker.run<number>(data => {
      return data * 9
    }, 10).subscribe(resultado => console.log(resultado))
    this._worker.run<SAPercents>(data => {
      // Filter system rows with System Availability section
      const SARows = data.filter(row => row[0] == 'SA')
      // Extract today's %
      let today = 0
      try {
        const date = moment().format('MM/DD/YYYY')
        today = formatPercent(SARows.filter(row => row[1] == date)[0][2])
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for today')
        console.error(err)
      }
      // Extract previous day %
      let yesterday = 0
      try {
        const date = moment().subtract(1, 'day').format('MM/DD/YYYY')
        yesterday = formatPercent(SARows.filter(row => row[1] == date)[0][2])
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for yesterday')
        console.error(err)
      }
      // Extract previous week %
      let prev_week = 0
      try {
        const week = moment().subtract(1, 'week').week()
        // @ts-ignore
        const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').week() == week)
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
        prev_week = formatPercent(sum / rows.length)
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for previous week')
        console.error(err)
      }
      // Extract current week %
      let act_week = 0
      try {
        const week = moment().week()
        // @ts-ignore
        const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').week() == week)
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
        act_week = formatPercent(sum / rows.length)
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for actual week')
        console.error(err)
      }
      // Extract previous month %
      let prev_month = 0
      try {
        const month = moment().subtract(1, 'month').month()
        // @ts-ignore
        const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').month() == month)
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
        prev_month = formatPercent(sum / rows.length)
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for previous month')
        console.error(err)
      }
      // Extract current month %
      let act_month = 0
      try {
        const month = moment().month()
        // @ts-ignore
        const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').month() == month)
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
        act_month = formatPercent(sum / rows.length)
      } catch (err) {
        console.log('System Availability', 'Processing', 'Percent not found for actual month')
        console.error(err)
      }
      return {
        rows: SARows,
        today: today,
        yesterday: yesterday,
        prev_week: prev_week,
        prev_month: prev_month,
        yesterday_up: today > yesterday ? 'up' : 'down',
        week_up: act_week > prev_week ? 'up' : 'down',
        month_up: act_month > prev_month ? 'up' : 'down'
      }
    }, this._data.system, ['moment', 'format-percent']).subscribe(result => {
      this.percents.next(result)
      this.SystemAvailabilityRows.next(result.rows)
    })
  }

}