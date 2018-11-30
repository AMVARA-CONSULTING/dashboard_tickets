import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-overall-box',
  templateUrl: './overall-box.component.html',
  styleUrls: ['./overall-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverallBoxComponent implements OnInit {

  constructor(
    private data: DataService,
    private config: ConfigService
  ) {
    this.data.month.subscribe(month => {
      const total = +this.data.priority.filter(row => row[1] == month.month).reduce((r, a) => r + a[3], 0)
      this.total = total.toLocaleString(this.config.config.language)
    })
  }

  ngOnInit() {
  }

  total: number | string = 0

}
