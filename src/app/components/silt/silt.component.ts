import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit {

  constructor(
    private data: DataService,
    private config: ConfigService
  ) {
    const currenDate = moment().format('YYYY[M]MM')
    const total = this.data.initialRows.filter(row => row[0] == 'SILT' && row[1] == currenDate)[0][2]
    this.total = parseFloat(total.replace('.', '').replace(',', '.')).toFixed(2).toLocaleString()
  }

  ngOnInit() {
  }

  total: number | string = 0

}
