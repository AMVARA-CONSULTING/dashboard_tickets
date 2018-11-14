import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-overall-box',
  templateUrl: './overall-box.component.html',
  styleUrls: ['./overall-box.component.scss']
})
export class OverallBoxComponent implements OnInit {

  constructor(
    private data: DataService
  ) {
    this.total = this.data.initialRows.filter(row => row[0] == 'BYPRIORITY').reduce((r, a) => r + parseInt(a[3].toString().replace('.', ''), 10), 0).toLocaleString()
  }

  ngOnInit() {
  }

  total: number | string = 0

}
