import { Component, OnInit, ChangeDetectionStrategy, Host, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SAPercents, SAViewType, Config } from '@other/interfaces';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { ToolsService, SubSink } from '@services/tools.service';
import { format, subDays, subWeeks, getWeek, parse, getMonth, subMonths } from 'date-fns';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { TicketsState } from '@states/tickets.state';

@Component({
  selector: 'cism-system-availability',
  templateUrl: './system-availability.component.html',
  styleUrls: ['./system-availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityComponent implements OnInit, OnDestroy {

  ngOnDestroy = () => this.subs.unsubscribe();

  subs = new SubSink();

  @Select(TicketsState.Section1) tickets$: Observable<any[]>

  constructor(
    private _store: Store,
    private _tools: ToolsService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config);
    this._holder.titles.next([this.config.system.titles.S1]);
  }

  config: Config;

  percents = new BehaviorSubject<SAPercents>(null);

  SystemAvailabilityRows = new BehaviorSubject<any[]>([]);

  view = new BehaviorSubject<SAViewType>('overview');

  ngOnInit() {
    // Filter system rows with System Availability section
    this.subs.sink = this.tickets$.subscribe(SARows => {
      // Extract today's %
      let today = 0;
      try {
        const date = format(new Date(), this.config.system.S1.formatDate);
        today = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2]);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for today. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
      }
      // Extract previous day %
      let yesterday = 0;
      try {
        let date: any = subDays(new Date(), 1);
        date = format(date, this.config.system.S1.formatDate);
        yesterday = this._tools.formatPercent(SARows.filter(row => row[1] == date)[0][2]);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for yesterday. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
      }
      // Extract previous week %
      let prev_week = 0;
      try {
        let week: any = subWeeks(new Date(), 1);
        week = getWeek(week);
        const rows = SARows.filter(row => {
          const date: any = parse(row[1], this.config.system.S1.formatDate, new Date());
          return getWeek(date) == week;
        });
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0);
        prev_week = this._tools.formatPercent(sum / rows.length);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for previous week. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
      }
      // Extract current week %
      let act_week = 0;
      try {
        const week = getWeek(new Date());
        // @ts-ignore
        const rows = SARows.filter(row => {
          let date: any = parse(row[1], this.config.system.S1.formatDate, new Date());
          date = getWeek(date);
          return date == week;
        });
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0);
        act_week = this._tools.formatPercent(sum / rows.length);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for actual week. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
      }
      // Extract previous month %
      let prev_month = 0;
      try {
        const month = getMonth(subMonths(new Date(), 1));
        // @ts-ignore
        const rows = SARows.filter(row => {
          let date: any = parse(row[1], this.config.system.S1.formatDate, new Date());
          date = getMonth(date);
          return date == month;
        });
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0);
        prev_month = this._tools.formatPercent(sum / rows.length);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for previous month. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
      }
      // Extract current month %
      let act_month = 0;
      try {
        const month = getMonth(new Date());
        // @ts-ignore
        const rows = SARows.filter(row => {
          let date: any = parse(row[1], this.config.system.S1.formatDate, new Date());
          date = getMonth(date);
          return date == month;
        });
        const sum = rows.map(r => r[2]).reduce((r, a) => r + a, 0);
        act_month = this._tools.formatPercent(sum / rows.length);
      } catch (err) {
        console.log('=======================================================');
        console.log('System Availability', 'Processing', 'Percent not found for actual month. Check you system report!!!');
        console.log('=======================================================');
        // console.error(err)
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
      };
      // Render DOM
      this.percents.next(result);
      this.SystemAvailabilityRows.next(result.rows);
    });
  }

}
