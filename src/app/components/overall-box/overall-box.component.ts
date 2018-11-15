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
    this.total = this.data.initialRows.filter(row => row[0] == 'BYPRIORITY').reduce((r, a) => r + parseInt(a[3].toString().replace('.', ''), 10), 0).toLocaleString(this.config.config.language)
  }

  ngOnInit() {
  }

  total: number | string = 0

}
