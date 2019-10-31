import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToolsService } from 'app/tools.service';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-overview-management',
  templateUrl: './overview-management.component.html',
  styleUrls: ['./overview-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewManagementComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _config: ConfigService
  ) { }

  ngOnInit() {
    const enterprise = this._tools.classifyByIndex(this._data.allTickets, this._config.config.columns.service)
    console.log(enterprise.GO[1][6])
  }

}

