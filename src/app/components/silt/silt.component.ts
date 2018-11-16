import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import * as moment from 'moment';

declare var humanizeDuration: any

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit {

  constructor(
    private data: DataService
  ) {
    const currenDate = moment().format('YYYY[M]MM')
    const total = parseInt(this.data.initialRows.filter(row => row[0] == 'SILT' && row[1] == currenDate)[0][2].replace(/[.]/g, '').replace(/[,]/g, '.'))
    this.total = humanizeDuration(total * 60000)
  }

  ngOnInit() {
  }

  total: number | string = 0

}
