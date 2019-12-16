import { Component, ChangeDetectionStrategy, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs/operators';
import { SubSink } from '@services/tools.service';

@Component({
  selector: 'cism-system-scroller',
  templateUrl: './system-scroller.component.html',
  styleUrls: ['./system-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemScrollerComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor(
    private _element: ElementRef
  ) { }

  bars = new BehaviorSubject<number>(0)

  enable = new BehaviorSubject<boolean>(false)

  barsWidth = new BehaviorSubject<number>(25)

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  ngOnInit() {
    this.subs.sink = this.bars.pipe(
      combineLatest(this.barsWidth)
    ).subscribe(_ => this.resize() )
  }

  @HostListener("window:resize")
  resize() {
    if (true) {
      const parentWidth = this._element.nativeElement.querySelector('.scrollable').offsetWidth
      this.enable.next((parentWidth + 5) <= (this.bars.getValue() * this.barsWidth.getValue() + 50))
    }
  }

}
