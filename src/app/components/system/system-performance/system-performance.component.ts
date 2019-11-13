import { Component, OnInit, ChangeDetectionStrategy, Host, ViewChild, Input, OnDestroy, } from '@angular/core';
import { ToolsService } from 'app/tools.service';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { WorkerService } from '@services/worker.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemScrollerComponent } from '../system-scroller/system-scroller.component';
import { SystemGraphicHolderComponent } from '../system-graphic-holder/system-graphic-holder.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/internal/operators/filter';
import { distinctUntilChanged } from 'rxjs/operators';

declare const classifyByIndex: any

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
    this._worker.run<any>((data: PIRData) => {
      var csvdata = data.tickets;
      csvdata = csvdata.filter(type => type[0] == 'S4');
      var newData = []
      var barData = []
      var linesData = []
      for(let key in csvdata){

        let pushedData = {
          name: csvdata[key][1],
          value: csvdata[key][3]
        }
        linesData.push(pushedData);


        let barsPush = {
          "name": csvdata[key][1],
          "value": 55500
        }
        barData.push(barsPush);

      }
      newData.push(barData);
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
        console.log("S4 log: ")
        console.log("SeriesData:", resultado[1])
        var test = [
          {
            name: 'USA',
            value: 50000
          },
          {
            name: 'United Kingdom',
            value: 30000
          },
          {
            name: 'France',
            value: 10000
          },
          {
            name: 'Japan',
            value: 5000
          },
          {
            name: 'China',
            value: 500
          },
          {
            name: 'Españita',
            value: 9000
          }
        ];
        console.log("Test:", test)
        this.chartData.next(
          resultado[0]
        )
        console.log("ChartData:", resultado[0])
        this.seriesData.next(resultado[1])
      })
  }

  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  innerPadding = '10%';
  animations: boolean = true;

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

