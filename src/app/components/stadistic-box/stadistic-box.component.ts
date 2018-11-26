import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StadisticBoxComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private _data: DataService,
    private _config: ConfigService
  ) { }

  ngOnInit() {
  }

  @Input() title: string = ''
  @Input() data: any[] = []
  @Input() go: string = ''

  ngOnChanges(changes: SimpleChanges) {
    const newData: any[] = changes.data.currentValue
    const newRows = []
    if (Array.isArray(newData)) {
      const length = newData.length
      const total = newData.reduce((r, a) => r + a[3], 0)
      for (let i = 0; i < length; i++) {
        newRows.push({
          name: newData[i][2],
          count: newData[i][3].toLocaleString(),
          percent: (newData[i][3] * 100 / total).toFixed(0)
        })
      }
    } else {
      const total = changes.data.currentValue[Object.keys(changes.data.currentValue)[0]].length
      const dataV2 = changes.data.currentValue[Object.keys(changes.data.currentValue)[0]].reduce((r, a) => {
        r[a[this._config.config.columns[this.go]]] = r[a[this._config.config.columns[this.go]]] || []
        r[a[this._config.config.columns[this.go]]].push(a)
        return r
      }, {})
      for (let prop in dataV2) {
        newRows.push({
          name: prop,
          count: dataV2[prop].length.toLocaleString(),
          percent: (dataV2[prop].length * 100 / total).toFixed(0)
        })
      }
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
