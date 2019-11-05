import { Component, ChangeDetectionStrategy, HostListener, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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

  ngOnInit() {
    this.bars.subscribe(_ => this.resize() )
  }

  @HostListener("window:resize")
  resize() {
    if (this.bars.getValue() > 20) {
      const parentWidth = this._element.nativeElement.querySelector('.scrollable').offsetWidth
      this.enable.next((parentWidth + 5) <= (this.bars.getValue() * 25 + 50))
    }
  }

}
