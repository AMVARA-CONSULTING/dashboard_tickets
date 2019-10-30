import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { ToolsService } from 'app/tools.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cism-system-availability',
  templateUrl: './system-availability.component.html',
  styleUrls: ['./system-availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _tools: ToolsService
  ) { }

  percents = new BehaviorSubject<SAPercents>(null)

  ngOnInit() {
    // Filter system rows with System Availability section
    const SARows = this._data.system.filter(row => row[0] == 'SA')
    // Extract today's %
    let today = 0
    try {
      const date = moment().format('MM/DD/YYYY')
      today = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2])
    } catch (err) {
      this._tools.log('System Availability', 'Processing', 'Percent not found for today')
      console.error(err)
    }
    // Extract previous day %
    let yesterday = 0
    try {
      const date = moment().subtract(1, 'day').format('MM/DD/YYYY')
      yesterday = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2])
    } catch (err) {
      this._tools.log('System Availability', 'Processing', 'Percent not found for yesterday')
      console.error(err)
    }
    // Extract previous week %
    let prev_week = 0
    try {
      const week = moment().subtract(1, 'week').week()
      // @ts-ignore
      const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').week() == week)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      prev_week = this._tools.formatPercent(sum / rows.length)
    } catch (err) {
      this._tools.log('System Availability', 'Processing', 'Percent not found for previous week')
      console.error(err)
    }
    // Extract previous week %
    let prev_month = 0
    try {
      const month = moment().subtract(1, 'month').month()
      // @ts-ignore
      const rows = SARows.filter(row => moment(row[1], 'MM/DD/YYYY').month() == month)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      prev_month = this._tools.formatPercent(sum / rows.length)
      console.log(prev_month)
    } catch (err) {
      this._tools.log('System Availability', 'Processing', 'Percent not found for previous month')
      console.error(err)
    }
    this.percents.next({
      today: today,
      yesterday: yesterday,
      prev_week: prev_week,
      prev_month: prev_month
    })
  }

}


export interface SAPercents {
  today: number
  yesterday: number
  prev_week: number
  prev_month: number
}