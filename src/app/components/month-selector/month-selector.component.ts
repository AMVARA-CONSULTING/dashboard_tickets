import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { ToolsService } from 'app/tools.service';

declare const moment: any

@Component({
  selector: 'cism-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectorComponent implements OnInit {

  constructor(
    private data: DataService,
    public config: ConfigService,
    private tools: ToolsService,
    private ref: ChangeDetectorRef
  ) {
    const months = []
    for (let i = 0; i < 12; i++) {
      months.push(moment().subtract(i, 'months').format('YYYY[M]MM'))
    }
    this.data.availableMonths = this.data.overall.map(row => row[0]).reverse()
    this.tools.log('Month Selector', 'Available months:', this.data.availableMonths)
    this.tools.log('Month Selector', 'Available months after filter:', months)
    this.currentMonth = months.filter(month => this.data.availableMonths.indexOf(month) > -1)[0]
    this.months = months
    this.data.month.subscribe(month => {
      this.currentMonth = month.month
    })
  }

  handleMonth(month: string) {
    this.tools.log('Month Selector', 'Selected:',month)
    const index = this.data.availableMonths.findIndex(mon => mon === month)
    this.data.month.next({
      month: month,
      index: index
    })
  }

  currentMonth: string = ''

  months = []

  newMonth(month: string, index: number): void {
    this.data.month.next({ month: month, index: index })
  }

  ngOnInit() {
    setTimeout(_ => this.ref.detectChanges())
  }

}
