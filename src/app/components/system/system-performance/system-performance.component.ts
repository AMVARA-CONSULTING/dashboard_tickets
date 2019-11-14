import { Component, OnInit, ChangeDetectionStrategy, Host } from '@angular/core';
import { ToolsService } from '@services/tools.service';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { WorkerService } from '@services/worker.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'cism-system-performance',
  templateUrl: './system-performance.component.html',
  styleUrls: ['./system-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemPerformanceComponent implements OnInit {

  // This Subject will be used for the chart to show the data
  chartData = new BehaviorSubject<Object[]>([])

  seriesData = new BehaviorSubject<Object[]>([])

  // Title Change Subscription
  titleChangeSub: Subscription

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _config: ConfigService,
    private _worker: WorkerService,
    @Host() private _holder: SystemGraphicHolderComponent) {
      this._holder.titles.next([this._config.config.system.titles.S4])
     }

     // This function is executed when this component is destroyed
    ngOnDestroy() {
      if (this.titleChangeSub) this.titleChangeSub.unsubscribe()
    }

  ngOnInit() {
    /* this._worker.run<any>((data: PIRData) => {
      var csvdata = data.tickets;
      csvdata = csvdata.filter(type => type[0] == 'S4');
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
      newData.push([
        {
          "name": 'Average Silt',
          "series": linesData
        }
      ]);
      return newData;
      }, {
        tickets: this._data.system,
        configColumns: Object.assign({}, this._config.config.columns)
      } as PIRData, ['classify-by-index']).subscribe(resultado =>{
        console.log("barData:", resultado[0])
        // Pushing into chart
        this.chartData.next(
          resultado[0]
        )
        console.log("seriesData:", resultado[1])
        // Pushing into chart
        this.seriesData.next(
          resultado[1]
        )
      }) */
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

