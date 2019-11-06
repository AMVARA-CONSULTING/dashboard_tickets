import { Component, OnInit, ChangeDetectionStrategy, Host, ViewChild} from '@angular/core';
import { ToolsService } from 'app/tools.service';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { WorkerService } from '@services/worker.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemScrollerComponent } from '../system-scroller/system-scroller.component';

declare const classifyByIndex: any

@Component({
  selector: 'cism-overview-management',
  templateUrl: './overview-management.component.html',
  styleUrls: ['./overview-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SystemScrollerComponent]
})
export class OverviewManagementComponent implements OnInit {

  // This Subject will be used for the chart to show the data
  chartData = new BehaviorSubject<Object[]>([])

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _config: ConfigService,
    private _worker: WorkerService
  ) { }

  //@ViewChild(SystemScrollerComponent, { static: true }) _scroller: SystemScrollerComponent

  ngOnInit() {
  var chartDataHolder = []
    console.log("webWorker Start: "+performance.now())
  this._worker.run<any>((data: PIRData) => {
    console.log("1"+performance.now())
     // Variable Declarations
     var chartDataa = [];
     // Get the data and sort them by Service.
     const enterprise = classifyByIndex(data.tickets, data.configColumns.service)
     
     for(let key in enterprise){
      const classifiedByType = classifyByIndex(enterprise[key], data.configColumns.type)
      for (let prop in classifiedByType) {
        classifiedByType[prop] = classifiedByType[prop].length
      }
      const keys = Object.keys(classifiedByType)
      const childData = keys.map( key => {
        return {
          name: key,
          value: classifiedByType[key],
          extra: { drill: 'first' }
        }
      })
      let child = enterprise[key];
          var ticketsByService = child.length
          var pushedData =  {"name": key, "series": childData
                            };
          chartDataa.push(pushedData);
     }
     console.log("3"+performance.now())
     return chartDataa.slice(0,10)
    }, {
      tickets: this._data.allTickets,
      configColumns: Object.assign({}, this._config.config.columns)
    } as PIRData, ['classify-by-index']).subscribe(resultado =>{
      console.log("ChartData log: ") 
      console.log(resultado);
      console.log("webWorker End: "+performance.now())
      //console.log(this._scroller)
      console.log(resultado)
      /*this._scroller.bars.next(
        resultado.length
      )*/
      this.chartData.next(
        resultado
      )
    })
  }

  // FIXME BAR WIDTH
  // FIXME REMOVE SLICES AND RE-ADD SCROLL WHEN ALEX IS DONE WITH THE FIX

  changeData(event){  
    // Check if it's first drill or second drill
    if(event.extra.drill == 'first'){
      try{
      var enterprise = this._data.allTickets.filter(type => type[12] == event.series);
      var ticketsType = []
      // Filter the tickets type and group them in different arrays.
      var ticketsChange = enterprise.filter(type => type[4] == 'Change');
      var ticketsIncident = enterprise.filter(type => type[4] == 'Incident');
      var ticketsProblem = enterprise.filter(type => type[4] == 'Problem');
      var ticketsRequest = enterprise.filter(type => type[4] == 'Request');
      ticketsType.push([event.series , ticketsChange.length, ticketsIncident.length, ticketsProblem.length, ticketsRequest.length]);
      var newData = [];
      var pushedData =  {"name": event.series, "series": [
                        {"name": "Incident", "value": ticketsType[0][2], "extra": {"drill": "second"}},
                        {"name": "Request", "value": ticketsType[0][4], "extra": {"drill": "second"}},
                        {"name": "Change", "value": ticketsType[0][1], "extra": {"drill": "second"}},
                        {"name": "Problem", "value": ticketsType[0][3], "extra": {"drill": "second"}}]
                        };
      newData.push(pushedData);
      // Change observable values to update the table
      this.chartData.next(
        newData
      )
      /*this._scroller.bars.next(
        newData.length
      )*/
      }catch(error){
        console.log('System Overview Management', 'Processing', 'Error in data filtering');
        console.error(error)
      }

      // Second drill
    } else if (event.extra.drill == 'second'){
      try{
      var enterprise = this._data.allTickets.filter(type => type[12] == event.series);
      enterprise = enterprise.filter(type => type[4] == event.name)
      var ticketsType = []
      var ticketsInfo = []
      // Get Sleep tickets from certain service && certain type of ticket
      const ticketsSleep = enterprise.filter(type => type[6] == 'Sleep');
      // Get WIP tickets from all services
      const ticketsWip = enterprise.filter(type => type[6] == 'WIP');
      // Get Assigned tickets from all services
      const ticketsAssigned = enterprise.filter(type => type[6] == 'Assigned');
      // Push all data into array
      ticketsInfo.push([event.series, ticketsSleep.length, ticketsWip.length, ticketsAssigned.length])
      var newData = [];
      let pushedData =  {"name": event.name+' '+event.series, "series": [
                        {"name": "Sleep", "value": ticketsInfo[0][1], "extra": {"drill": "third"}},
                        {"name": "WIP", "value": ticketsInfo[0][2], "extra": {"drill": "third"}},
                        {"name": "Assigned", "value": ticketsInfo[0][3], "extra": {"drill": "third"}}]
                        };
      newData.push(pushedData);
      // Change observable values to update the table
      this.chartData.next(
        newData
      )
      /*this._scroller.bars.next(
        newData.length
      )*/
      }catch(error){
        console.log('System Overview Management ', 'Processing ', 'Error in data filtering, second drill');
        console.error(error)
      }
    }
 }

 resetData(){
  var chartDataa = [];
     // Get the data and sort them by Service.
     const enterprise = this.classifyByIndex(this._data.allTickets, this._config.config.columns.service)
     for(let key in enterprise){
      const classifiedByType = this.classifyByIndex(enterprise[key], this._config.config.columns.type)
      for (let prop in classifiedByType) {
        classifiedByType[prop] = classifiedByType[prop].length
      }
      const keys = Object.keys(classifiedByType)
      const childData = keys.map( key => {
        return {
          name: key,
          value: classifiedByType[key],
          extra: { drill: 'first' }
        }
      })
      let child = enterprise[key];
          var ticketsByService = child.length
          var pushedData =  {"name": key, "series": childData
                            };
          chartDataa.push(pushedData);
     }
     this.chartData.next(
      chartDataa.slice(0,10)
    )
 }
 
 classifyByIndex(array, index) {
  return array.reduce((r, a) => {
      r[a[index]] = r[a[index]] || [];
      r[a[index]].push(a);
      return r;
  }, {});
}

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'test';
  yAxisLabel = 'test';
  legend = true;
  legendTitle = '';
  colorScheme = {
    domain: ['#00bcd4', '#ffb74d', '#7e57c2', '#039be5']
  }
}

export interface PIRData {
  tickets: any[]
  configColumns: any
}

