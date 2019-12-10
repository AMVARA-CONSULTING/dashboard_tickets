import { Component, OnInit, ChangeDetectionStrategy, Host } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SAPercents, SAViewType } from '@other/interfaces';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { ConfigService } from '@services/config.service';
import { ToolsService } from '@services/tools.service';
import dayjs from 'dayjs';

@Component({
  selector: 'cism-system-availability',
  templateUrl: './system-availability.component.html',
  styleUrls: ['./system-availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _config: ConfigService,
    private _tools: ToolsService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S1])
  }
  
  percents = new BehaviorSubject<SAPercents>(null)

  SystemAvailabilityRows = new BehaviorSubject<any[]>([])

  view = new BehaviorSubject<SAViewType>('overview')

  ngOnInit() {
    // Run WebWorker
    const t0 = performance.now()
    // Filter system rows with System Availability section
    const SARows = this._data.system.filter(row => row[0] == 'S1')
    // Extract today's %
    let today = 0
    try {
      const date = dayjs().format(this._config.config.system.S1.formatDate)
      today = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2])
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for today')
      console.error(err)
    }
    // Extract previous day %
    let yesterday = 0
    try {
      const date = dayjs().subtract(1, 'day').format(this._config.config.system.S1.formatDate)
      yesterday = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2])
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for yesterday')
      console.error(err)
    }
    // Extract previous week %
    let prev_week = 0
    try {
      const week = dayjs().subtract(1, 'week').week()
      const rows = SARows.filter(row => dayjs(row[1], this._config.config.system.S1.formatDate).week() == week)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      prev_week = this._tools.formatPercent(sum / rows.length)
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for previous week')
      console.error(err)
    }
    // Extract current week %
    let act_week = 0
    try {
      const week = dayjs().week()
      // @ts-ignore
      const rows = SARows.filter(row => dayjs(row[1], this._config.config.system.S1.formatDate).week() == week)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      act_week = this._tools.formatPercent(sum / rows.length)
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for actual week')
      console.error(err)
    }
    // Extract previous month %
    let prev_month = 0
    try {
      const month = dayjs().subtract(1, 'month').month()
      // @ts-ignore
      const rows = SARows.filter(row => dayjs(row[1], this._config.config.system.S1.formatDate).month() == month)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      prev_month = this._tools.formatPercent(sum / rows.length)
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for previous month')
      console.error(err)
    }
    // Extract current month %
    let act_month = 0
    try {
      const month = dayjs().month()
      // @ts-ignore
      const rows = SARows.filter(row => dayjs(row[1], this._config.config.system.S1.formatDate).month() == month)
      const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0)
      act_month = this._tools.formatPercent(sum / rows.length)
    } catch (err) {
      console.log('System Availability', 'Processing', 'Percent not found for actual month')
      console.error(err)
    }
    // Return obtained stats
    const result = {
      rows: SARows,
      today: today,
      yesterday: yesterday,
      prev_week: prev_week,
      prev_month: prev_month,
      yesterday_up: today > yesterday ? 'up' : 'down',
      week_up: act_week > prev_week ? 'up' : 'down',
      month_up: act_month > prev_month ? 'up' : 'down'
    }
    // Render DOM
    const t1 = performance.now()
    console.log("S1 Chart WebWorker took:", (t1 - t0)+'ms')
    this.percents.next(result)
    this.SystemAvailabilityRows.next(result.rows)
  }

}