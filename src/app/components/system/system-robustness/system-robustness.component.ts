import { Component, ChangeDetectionStrategy, Host } from '@angular/core';
import { SAViewType, Config } from '@other/interfaces';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Store } from '@ngxs/store';

@Component({
  selector: 'cism-system-robustness',
  templateUrl: './system-robustness.component.html',
  styleUrls: ['./system-robustness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessComponent {

  constructor(
    @Host() private _holder: SystemGraphicHolderComponent,
    private _store: Store
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config)
    this._holder.titles.next([this.config.system.titles.S2])
  }

  config: Config
  
  view = new BehaviorSubject<SAViewType>('monthly')

}
