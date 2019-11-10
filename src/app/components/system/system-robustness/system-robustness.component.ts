import { Component, OnInit, ChangeDetectionStrategy, Host } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { WorkerService } from '@services/worker.service';
import { SAViewType } from '@other/interfaces';
import { SystemGraphicHolderComponent } from '../system-graphic-holder/system-graphic-holder.component';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-system-robustness',
  templateUrl: './system-robustness.component.html',
  styleUrls: ['./system-robustness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessComponent implements OnInit {

  constructor(
    private _config: ConfigService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S2])
  }

  ngOnInit() {
  }
  
  view = new FormControl('monthly' as SAViewType)

}
