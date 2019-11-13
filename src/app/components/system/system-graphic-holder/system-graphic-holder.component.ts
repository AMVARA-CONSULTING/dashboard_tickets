import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemTitleClick } from '@other/interfaces';

@Component({
  selector: 'cism-system-graphic-holder',
  templateUrl: './system-graphic-holder.component.html',
  styleUrls: ['./system-graphic-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemGraphicHolderComponent {

  titles = new BehaviorSubject<string[]>([])

  click = new BehaviorSubject<SystemTitleClick>(null)

  emitClick(index, name) {
    // Skip emit event if it's the last one, the last one shouldn't be clickable
    if ((index + 1) != this.titles.getValue().length) {
      this.click.next({
        titles: this.titles.getValue(),
        indexClicked: index,
        nameClicked: name
      })
    }
  }

}
