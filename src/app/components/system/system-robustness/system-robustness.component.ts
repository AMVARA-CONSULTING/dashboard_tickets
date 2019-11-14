import { Component, ChangeDetectionStrategy, Host } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { ConfigService } from '@services/config.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cism-system-robustness',
  templateUrl: './system-robustness.component.html',
  styleUrls: ['./system-robustness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessComponent {

  constructor(
    private _config: ConfigService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S2])
  }
  
  view = new BehaviorSubject<SAViewType>('monthly')

}
