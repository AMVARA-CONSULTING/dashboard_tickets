import { Component, OnInit, ChangeDetectionStrategy, Host } from '@angular/core';
import { ConfigService } from '@services/config.service';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { KeyPair } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { ToolsService } from '@services/tools.service';
import { Router } from '@angular/router';

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
    private _router: Router,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S3])
    this.ie = this._tools.isIE()
  }

  groups:any;
  

  ngOnInit() {
    this.groups = this._tools.classifyByIndex(this._data.allTickets, this._config.config.columns.service)
    for (const group in this.groups) {
      this.groups[group] = this.groups[group].length
    }
    const chartData: KeyPair[] = Object.keys(this.groups).map(group => {
      return {
        name: group,
        value: this.groups[group]
      } as KeyPair
    })
    this.chartData.next(chartData)

    // gchart
    this.drawChart();
  }
  // Draws the google-chart data for IE, so it can be redrawn on resize.
  drawChart(){
    var myData = [];
    let barsPush = ['Root Cause', null, 0]
    myData.push(barsPush);
    for (const group in this.groups) {
      let barsPush = [group, 'Root Cause', this.groups[group]]
      myData.push(barsPush);
    }
    this.myData.next(myData);
  }

  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }

  onResize($event){
    this.drawChart();
  }

  onSelect(e) {
    const service = Array.isArray(e) ? this.myData.getValue()[e[0].row][0] : e.name
    this._router.navigate(['tickets', 'service', service])
  }

  TreeMap = 'TreeMap';

  myColumnNames = ['Group', 'Parent', 'Tickets'];

  myOptions = {
    minColor: '#48bd88',
    midColor: '#00938c',
    maxColor: '#007a93',
    headerHeight: 0,
    highlightOnMouseOver: false,
    fontFamily: 'CorpoS'
  };

  valueFormatting = val => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  chartData = new BehaviorSubject<KeyPair[]>([]) // ng data var

  myData = new BehaviorSubject<any[]>([]) // gcharts data var

  ie = false

}
