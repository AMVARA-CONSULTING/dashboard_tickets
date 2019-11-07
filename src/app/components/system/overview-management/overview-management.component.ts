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

  @ViewChild(SystemScrollerComponent, { static: true }) _scroller: SystemScrollerComponent  
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
      this._scroller.bars.next(
        resultado.length
      )
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
      var csvdata = this._data.system;
      csvdata = csvdata.filter(type => type[7] == event.series);
      var newData = []
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.external)

      for(let key in csvdata){
        let incidentTickets = 0;
        let wipTickets = 0;
        let sleepTickets = 0;
        let assignedTickets = 0; 
        for (let i = 0; i < csvdata[key].length; i++){
          incidentTickets = incidentTickets + csvdata[key][i][2];
          wipTickets = wipTickets + csvdata[key][i][3];
          sleepTickets = sleepTickets + csvdata[key][i][4];
          assignedTickets = assignedTickets + csvdata[key][i][5];
        }
        let pushedData =  {"name": key, "series": [
                          {"name": "Incident", "value": incidentTickets, "extra": {"drill": "second", "service": event.extra.service}},
                          {"name": "WIP", "value": wipTickets, "extra": {"drill": "second", "service": event.extra.service}},
                          {"name": "Sleep", "value": sleepTickets, "extra": {"drill": "second", "service": event.extra.service}},
                          {"name": "Assigned", "value": assignedTickets, "extra": {"drill": "second", "service": event.extra.service}}]
                          };
        newData.push(pushedData);
        }
        this.chartData.next(
          newData
        )
        this._scroller.bars.next(
          newData.length
        )
    } else if (event.extra.drill == 'second'){
      var csvdata = this._data.system;
      csvdata = csvdata.filter(type => type[7] == event.extra.service);
      var newData = []
      csvdata = csvdata.filter(type => type[8] == event.series);
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.classification)
      for(let key in csvdata){
        let incidentTickets = 0;
        let wipTickets = 0;
        let sleepTickets = 0;
        let assignedTickets = 0; 
        for (let i = 0; i < csvdata[key].length; i++){
          incidentTickets = incidentTickets + csvdata[key][i][2];
          wipTickets = wipTickets + csvdata[key][i][3];
          sleepTickets = sleepTickets + csvdata[key][i][4];
          assignedTickets = assignedTickets + csvdata[key][i][5];
        }
        let pushedData =  {"name": key, "series": [
                          {"name": "Incident", "value": incidentTickets, "extra": {"drill": "third", "service": event.extra.service}},
                          {"name": "WIP", "value": wipTickets, "extra": {"drill": "third", "service": event.extra.service}},
                          {"name": "Sleep", "value": sleepTickets, "extra": {"drill": "third", "service": event.extra.service}},
                          {"name": "Assigned", "value": assignedTickets, "extra": {"drill": "third", "service": event.extra.service}}]
                          };
        newData.push(pushedData);
        }
        this.chartData.next(
          newData
        )
        this._scroller.bars.next(
          newData.length
        )
    }
 }

 resetData(){
  var csvdata = this._data.system;
  csvdata = csvdata.filter(type => type[0] == 'S5');
  var newData = []
  csvdata = this.classifyByIndex(csvdata, this._config.config.columns.description)
  for(let key in csvdata){
    let incidentTickets = 0;
    let wipTickets = 0;
    let sleepTickets = 0;
    let assignedTickets = 0; 
    for (let i = 0; i < csvdata[key].length; i++){
      incidentTickets = incidentTickets + csvdata[key][i][2];
      wipTickets = wipTickets + csvdata[key][i][3];
      sleepTickets = sleepTickets + csvdata[key][i][4];
      assignedTickets = assignedTickets + csvdata[key][i][5];
    }
    let pushedData =  {"name": key, "series": [
                      {"name": "Incident", "value": incidentTickets, "extra": {"drill": "first", "service": key}},
                      {"name": "WIP", "value": wipTickets, "extra": {"drill": "first", "service": key}},
                      {"name": "Sleep", "value": sleepTickets, "extra": {"drill": "first", "service": key}},
                      {"name": "Assigned", "value": assignedTickets, "extra": {"drill": "first", "service": key}}]
                      };
    newData.push(pushedData);
  }
  this.chartData.next(
    newData
  )
  this._scroller.bars.next(
    newData.length
  )
  // var chartDataa = [];
  //    // Get the data and sort them by Service.
  //    const enterprise = this.classifyByIndex(this._data.allTickets, this._config.config.columns.service)
  //    for(let key in enterprise){
  //     const classifiedByType = this.classifyByIndex(enterprise[key], this._config.config.columns.type)
  //     for (let prop in classifiedByType) {
  //       classifiedByType[prop] = classifiedByType[prop].length
  //     }
  //     const keys = Object.keys(classifiedByType)
  //     const childData = keys.map( key => {
  //       return {
  //         name: key,
  //         value: classifiedByType[key],
  //         extra: { drill: 'first' }
  //       }
  //     })
  //     let child = enterprise[key];
  //         var ticketsByService = child.length
  //         var pushedData =  {"name": key, "series": childData
  //                           };
  //         chartDataa.push(pushedData);
  //    }
  //    this.chartData.next(
  //     chartDataa.slice(0,10)
  //   )
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

