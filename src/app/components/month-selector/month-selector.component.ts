import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectorComponent {

  constructor(
    public data: DataService
  ) { }

  handleMonth(month: string) {
    const index = this.data.availableMonths.findIndex(mon => mon === month)
    this.data.month.next({
      month: month,
      index: index
    })
  }

}
