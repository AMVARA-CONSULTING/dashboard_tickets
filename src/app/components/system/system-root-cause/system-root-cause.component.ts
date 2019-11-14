import { Component, OnInit, ChangeDetectionStrategy, Host } from '@angular/core';
import { ConfigService } from '@services/config.service';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { KeyPair } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { ToolsService } from '@services/tools.service';

@Component({
  selector: 'cism-system-root-cause',
  templateUrl: './system-root-cause.component.html',
  styleUrls: ['./system-root-cause.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRootCauseComponent implements OnInit {

  constructor(
    private _config: ConfigService,
    private _data: DataService,
    private _tools: ToolsService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S3])
    this.ie = this._tools.isIE()
  }

  ngOnInit() {
    const groups = this._tools.classifyByIndex(this._data.allTickets, this._config.config.columns.service)
    for (const group in groups) {
      groups[group] = groups[group].length
    }
    const chartData: KeyPair[] = Object.keys(groups).map(group => {
      return {
        name: group,
        value: groups[group]
      } as KeyPair
    })
    this.chartData.next(chartData)
  }

  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }

  valueFormatting = val => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  chartData = new BehaviorSubject<KeyPair[]>([])

  ie = false

}
