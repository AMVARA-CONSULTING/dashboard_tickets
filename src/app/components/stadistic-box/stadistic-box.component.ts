import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StadisticBoxComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private _data: DataService
  ) { }

  ngOnInit() {
  }

  @Input() title: string = ''
  @Input() data: any[] = []
  @Input() go: string = ''

  ngOnChanges(changes: SimpleChanges) {
    const newData: any[] = changes.data.currentValue
    const total = newData.reduce((r, a) => r + a[3], 0)
    const newRows = []
    const length = newData.length
    for (let i = 0; i < length; i++) {
      newRows.push({
        name: newData[i][2],
        count: newData[i][3].toLocaleString(),
        percent: (newData[i][3] * 100 / total).toFixed(0)
      })
    }
    this.rows = newRows
  }

  rows = []

  rippleColor: string = 'rgba(255,255,255,.06)'

  goA(row): void {
    this._data.count = row.count
    this._data.percent = row.percent
    this.router.navigate(['tickets', this.go, row.name])
  }

}
