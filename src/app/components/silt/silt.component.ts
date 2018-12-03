import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { Subscription, BehaviorSubject } from 'rxjs';

declare var humanizeDuration: any

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit, OnDestroy {

  constructor(
    private data: DataService,

  ) {
    this.total = new BehaviorSubject<string>('')
    this.data.month.subscribe(month => {
      const total = +this.data.silt.filter(row => row[1] == month.month)[0][2]
      this.total.next(humanizeDuration(total * 60000))
    })
  }

  monthSubscription: Subscription

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
  }

  total: BehaviorSubject<string>

}
