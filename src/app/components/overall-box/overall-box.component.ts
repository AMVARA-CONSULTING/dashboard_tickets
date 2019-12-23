import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SubSink } from '@services/tools.service';
import { ConfigState } from '@states/config.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'cism-overall-box',
  templateUrl: './overall-box.component.html',
  styleUrls: ['./overall-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverallBoxComponent implements OnInit, OnDestroy {

  @Select(ConfigState.getLanguage) language$: Observable<string>

  subs = new SubSink()

  constructor(
    private data: DataService
  ) { }

  async ngOnInit() {
    const language = await this.language$.toPromise()
    this.subs.sink = this.data.month.subscribe(month => {
      const total = +this.data.overall.filter(row => row[0] == month.month)[0][1]
      this.total$.next(total.toLocaleString(language))
    })
  }

  total$ = new BehaviorSubject<string>('')

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
