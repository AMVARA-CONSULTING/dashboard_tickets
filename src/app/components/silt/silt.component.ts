import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { SubSink } from '@services/tools.service';

declare var humanizeDuration: any

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor( private data: DataService ) { }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  ngOnInit() {
    this.subs.sink = this.data.month.subscribe(month => {
      const total = +this.data.silt.filter(row => row[1] == month.month)[0][2]
      this.total.next(humanizeDuration(total * 60000))
    })
  }

  total = new BehaviorSubject<string>('')

}
