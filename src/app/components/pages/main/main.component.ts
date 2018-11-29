import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { MatRipple } from '@angular/material/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'cism-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(
    public data: DataService,
    private _dialog: MatDialog
  ) {
    this.data.month.subscribe(month => {
      if (this.data.tickets.length > 0) {
        const newRows = this.data.tickets.filter(row => row[0] == month.month)
        if (newRows.length === 0) {
          this._dialog.open(DataNotFound)
          return
        }
        this.rows = newRows
        this.byPriority = this.byApplication = this.byStatus = this.byType = this.rows.reduce((r, a) => {
          r[a[0]] = r[a[0]] || []
          r[a[0]].push(a)
          return r
        }, {})
      } else {
        const types = data.initialRows.reduce((r, a) => {
          r[a[0]] = r[a[0]] || []
          r[a[0]].push(a)
          return r
        }, {})
        this.byPriority = types['BYPRIORITY']
        this.byType = types['BYTYPE']
        this.byApplication = types['BYSERVICE']
        this.byStatus = types['BYSTATUS']
        this.rows = this.data.initialRows
      }
    })
  }

  rows: any[] = []

  ngOnInit() {
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

}

@Component({
  selector: 'data-unavailable',
  templateUrl: 'data-unavailable.html',
})
export class DataNotFound {

  constructor(
    public dialogRef: MatDialogRef<DataNotFound>
  ) { }

}