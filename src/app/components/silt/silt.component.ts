import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { SubSink } from '@services/tools.service';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs/internal/operators/combineLatest';
import { GlobalState } from '@other/interfaces';

declare var humanizeDuration: any

@Component({
  selector: 'cism-silt',
  templateUrl: './silt.component.html',
  styleUrls: ['./silt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiltComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor(
    private data: DataService,
    private _store: Store
  ) { }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  ngOnInit() {
    this.subs.sink = this.data.month.pipe(
      combineLatest(
        this._store.select((state: GlobalState) => state.tickets.silt)
      )
    ).subscribe(([month, silt]) => {
      const total = +silt.filter(row => row[1] == month.month)[0][2]
      this.total.next(humanizeDuration(total * 60000))
    })
  }

  total = new BehaviorSubject<string>('')

}
