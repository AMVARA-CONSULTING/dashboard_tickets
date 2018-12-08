import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';

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
    public config: ConfigService
  ) {
    this.data.month.subscribe(month => this.currentMonth = month.month)
    const months = []
    for (let i = 0; i < 12; i++) {
      months.push(moment().subtract(i, 'months').format('YYYY[M]MM'))
    }
    const availableMonths = this.data.overall.map(row => row[0])
    this.months = months.filter(month => availableMonths.indexOf(month) > -1)
  }

  currentMonth: string = ''

  months = []

  newMonth(month: string, index: number): void {
    this.data.month.next({ month: month, index: index })
  }

  ngOnInit() {
  }

}
