import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'cism-system-scroller',
  templateUrl: './system-scroller.component.html',
  styleUrls: ['./system-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemScrollerComponent {

  width = new BehaviorSubject<number>(0)

}
