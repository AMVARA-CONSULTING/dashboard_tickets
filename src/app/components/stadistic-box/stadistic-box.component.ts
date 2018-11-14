import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss']
})
export class StadisticBoxComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string = ''
  @Input() data: any[] = []

  ngOnChanges(changes: SimpleChanges) {
    const newData: any[] = changes.data.currentValue
    const total = newData.reduce((r, a) => r + a[3], 0)
    const newRows = []
    const length = newData.length
    for (let i = 0; i < length; i++) {
      newRows.push({
        name: newData[i][2],
        count: newData[i][3],
        percent: (newData[i][3] * 100 / total).toFixed(0)
      })
    }
    this.rows = newRows
  }

  rows = []

  rippleColor: string = 'rgba(255,255,255,.06)'

}
