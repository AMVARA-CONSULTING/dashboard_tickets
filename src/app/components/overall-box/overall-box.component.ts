import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SubSink } from '@services/tools.service';

@Component({
  selector: 'cism-overall-box',
  templateUrl: './overall-box.component.html',
  styleUrls: ['./overall-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverallBoxComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor(
    private data: DataService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.subs.add(
      this.data.month.subscribe(month => {
        const total = +this.data.overall.filter(row => row[0] == month.month)[0][1]
        this.total$.next(total.toLocaleString(this.config.config.language))
      })
    )
  }

  total$ = new BehaviorSubject<string>('')

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
