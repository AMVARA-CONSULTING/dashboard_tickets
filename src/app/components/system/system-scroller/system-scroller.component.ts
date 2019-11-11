import { Component, ChangeDetectionStrategy, HostListener, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'cism-system-scroller',
  templateUrl: './system-scroller.component.html',
  styleUrls: ['./system-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemScrollerComponent implements OnInit {

  constructor(
    private _element: ElementRef
  ) { }

  bars = new BehaviorSubject<number>(0)

  enable = new BehaviorSubject<boolean>(false)

  barsWidth = new BehaviorSubject<number>(25)

  ngOnInit() {
    this.bars.pipe(
      combineLatest(this.barsWidth)
    ).subscribe(_ => this.resize() )
  }

  @HostListener("window:resize")
  resize() {
    if (true) {
      const parentWidth = this._element.nativeElement.querySelector('.scrollable').offsetWidth
      console.log(parentWidth)
      console.log(this.bars.getValue() * this.barsWidth.getValue() + 50)
      this.enable.next((parentWidth + 5) <= (this.bars.getValue() * this.barsWidth.getValue() + 50))
    }
  }

}
