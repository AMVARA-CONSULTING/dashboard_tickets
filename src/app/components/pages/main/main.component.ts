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
  ) { }

  rows: any[] = []

  ngOnInit() {
    this.data.loading.next(false)
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