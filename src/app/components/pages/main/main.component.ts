import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'cism-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(
    public data: DataService
  ) {
    const types = data.initialRows.reduce((r, a) => {
      r[a[0]] = r[a[0]] || []
      r[a[0]].push(a)
      return r
    }, {})
    this.byPriority = types['BYPRIORITY']
    this.byType = types['BYTYPE']
    this.byApplication = types['BYSERVICE']
    this.byStatus = types['BYSTATUS']
  }

  ngOnInit() {
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

}
