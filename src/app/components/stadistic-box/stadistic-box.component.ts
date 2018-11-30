import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StadisticBoxComponent implements OnInit, OnChanges, OnDestroy {

  constructor(
    private router: Router,
    private data: DataService,
    private config: ConfigService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.data.month.subscribe(() => this.rollup())
  }

  monthSubscription: Subscription

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
  }

  @Input() title: string = ''
  @Input() go: string = ''

  rows = []

  ngOnChanges() {
    this.rollup()
  }

  rippleColor: string = 'rgba(255,255,255,.06)'

  goA(row): void {
    this.data.count = row.count
    this.data.percent = row.percent
    this.router.navigate(['tickets', this.go, row.name])
  }

  rollup() {
    const month = this.data.month.getValue().month
    let stats = []
    switch (this.go) {
      case "priority":
        stats = this.data.priority
        break
      case "status":
        stats = this.data.status
        break
      case "type":
        stats = this.data.type
        break
      case "service":
        stats = this.data.service
        break
    }
    stats = stats.filter(row => row[1] == month)
    const newRows = []
    const length = stats.length
    const total = stats.reduce((r, a) => r + a[3], 0)
    for (let i = 0; i < length; i++) {
      newRows.push({
        name: stats[i][2],
        count: stats[i][3].toLocaleString(this.config.config.language),
        percent: (stats[i][3] * 100 / total).toFixed(0)
      })
    }
    this.rows = newRows
    if (!this.ref['destroyed']) this.ref.detectChanges()
  }

}
