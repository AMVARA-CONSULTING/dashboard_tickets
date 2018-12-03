import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

declare var humanizeDuration: any

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit, OnDestroy {

  constructor(
    private data: DataService
  ) {
    this.data.month.subscribe(month => {
      console.log("Silt", this.data.silt)
      const total = +this.data.silt.filter(row => row[1] == month.month)[0][2]
      this.total = humanizeDuration(total * 60000)
    })
  }

  monthSubscription: Subscription

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
  }

  total: number | string = 0

}
