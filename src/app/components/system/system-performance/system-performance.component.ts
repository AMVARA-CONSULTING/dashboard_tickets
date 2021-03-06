import { Component, OnInit, ChangeDetectionStrategy, Host, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store, Select } from '@ngxs/store';
import { Config } from '@other/interfaces';
import { TicketsState } from '@states/tickets.state';
import { Observable } from 'rxjs/internal/Observable';
import { SubSink } from '@services/tools.service';

@Component({
  selector: 'cism-system-performance',
  templateUrl: './system-performance.component.html',
  styleUrls: ['./system-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemPerformanceComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  ngOnDestroy = () => this.subs.unsubscribe()

  // This Subject will be used for the chart to show the data
  chartData = new BehaviorSubject<any[]>([])

  seriesData = new BehaviorSubject<any[]>([])

  constructor(
    private _data: DataService,
    private _store: Store,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config)
    this._holder.titles.next([this.config.system.titles.S4])
  }

  @Select(TicketsState.Section4) csvdata$: Observable<any[]>

  config: Config

  ngOnInit() {
    this.subs.sink = this.csvdata$.subscribe(csvdata => {
      var newData = []
      var barData = []
      var linesData = []
      for(let key in csvdata){
        // Lines data pushing
        let pushedData = {
          name: csvdata[key][1],
          value: csvdata[key][3]
        }
        linesData.push(pushedData);
        // Bar data pushing
        let barsPush = {
          "name": csvdata[key][1],
          "value": csvdata[key][2]
        }
        barData.push(barsPush);
      }
      newData.push(barData);
      // Formatting the lines data
      newData.push([{
        "name": 'Average Silt',
        "series": linesData
      }]);
      this.chartData.next(newData[0])
      // Pushing into chart
      this.seriesData.next(newData[1])
    })
  }

  // Chart data
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  innerPadding = '10%';
  animations: boolean = true;

  // Graph colors and config
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#ffb74d']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#00bcd4']
  };

}

export interface PIRData {
  tickets: any[]
  configColumns: any
}