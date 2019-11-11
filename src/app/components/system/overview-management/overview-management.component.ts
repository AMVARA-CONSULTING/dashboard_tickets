import { Component, OnInit, ChangeDetectionStrategy, Host, ViewChild, Input, OnDestroy} from '@angular/core';
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
  selector: 'cism-overview-management',
  templateUrl: './overview-management.component.html',
  styleUrls: ['./overview-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SystemScrollerComponent]
})
export class OverviewManagementComponent implements OnInit, OnDestroy {

  // This Subject will be used for the chart to show the data
  chartData = new BehaviorSubject<Object[]>([])

  // Title Change Subscription
  titleChangeSub: Subscription

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _config: ConfigService,
    private _worker: WorkerService,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this._holder.titles.next([this._config.config.system.titles.S5])
  }

  // This function is executed when this component is destroyed
  ngOnDestroy() {
    if (this.titleChangeSub) this.titleChangeSub.unsubscribe()
  }

  @ViewChild(SystemScrollerComponent, { static: true }) _scroller: SystemScrollerComponent  
  ngOnInit() {
    // Handle title click change
    this.titleChangeSub = this._holder.click.pipe(
      filter(val => val != null && val.titles[0] == this._config.config.system.titles.S5),
      distinctUntilChanged()
    ).subscribe(titleChanged => {
      
      switch(titleChanged.titles.length){
        case 2: 
          this.resetData();
          this._holder.titles.next([this._config.config.system.titles.S5])
          break;
        case 3:
            this.changeData({
              series: titleChanged.nameClicked,
              extra: {
                drill: "first",
                service: titleChanged.nameClicked
              }
            });
            this._holder.titles.next([this._config.config.system.titles.S5, titleChanged.nameClicked])
            break;
          }
    })
    console.log("webWorker Start: "+performance.now())
    this._worker.run<any>((data: PIRData) => {
    var csvdata = data.tickets;
    csvdata = csvdata.filter(type => type[0] == 'S5');
    var newData = []
    csvdata = classifyByIndex(csvdata, data.configColumns.description)
    console.log(csvdata);
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
                        {"name": "", "value": "", "extra": {"drill": "first", "service": key}},
                        {"name": "WIP", "value": wipTickets, "extra": {"drill": "first", "service": key}},
                        {"name": "Sleep", "value": sleepTickets, "extra": {"drill": "first", "service": key}},
                        {"name": "Assigned", "value": assignedTickets, "extra": {"drill": "first", "service": key}}]
                        };
      newData.push(pushedData);
      }
      return newData;
    }, {
      tickets: this._data.system,
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
      this._scroller.barsWidth.next(
        100
      )
    })
  }

  changeData(event){  
    // Check if it's first drill or second drill
    if(event.extra.drill == 'first'){

      console.log(event);

      var csvdata = this._data.system;
      csvdata = csvdata.filter(type => type[7] == event.series);
      var newData = []
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.external)

      this._holder.titles.next([this._config.config.system.titles.S5, event.extra.service])

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
                          {"name": "", "value": "", "extra": {"drill": "first", "service": key}},
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
        this._scroller.barsWidth.next(
          100
        )
    } else if (event.extra.drill == 'second'){
      var csvdata = this._data.system;
      csvdata = csvdata.filter(type => type[7] == event.extra.service);
      var newData = []
      csvdata = csvdata.filter(type => type[8] == event.series);
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.classification)
      this._holder.titles.next(this._holder.titles.getValue().concat([event.name]))
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
                          {"name": "", "value": "", "extra": {"drill": "first", "service": key}},
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
        this._scroller.barsWidth.next(
          120
        )
    }
 }
 
 resetData(){
  var csvdata = this._data.system;
  csvdata = csvdata.filter(type => type[0] == 'S5');
  var newData = []
  csvdata = this.classifyByIndex(csvdata, this._config.config.columns.description)
  console.log(csvdata);
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
                      {"name": "", "value": "", "extra": {"drill": "first", "service": key}},
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
  this._scroller.barsWidth.next(
    100
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
    domain: ['#00bcd4','lightgrey', '#ffb74d', '#7e57c2', '#039be5']
  }
}

export interface PIRData {
  tickets: any[]
  configColumns: any
}


