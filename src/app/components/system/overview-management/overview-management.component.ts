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
  providers: [SystemScrollerComponent],
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
      console.log(titleChanged)
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
    this.resetData()
  }

  changeData(event?){  
    // Check if it's first drill or second drill
    var csvdata = this._data.system.filter(type => type[0] == 'S5')
    csvdata = csvdata.filter(type => type[7] == event.extra.service);
    if (event.extra.drill == 'second') {
      csvdata = csvdata.filter(type => type[8] == event.series);
    }
    if (event.extra.drill == 'first') {
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.external)
    } else {
      csvdata = this.classifyByIndex(csvdata, this._config.config.columns.classification)
    }
    switch (event.extra.drill) {
      case "first":
        this._holder.titles.next([this._config.config.system.titles.S5, event.extra.service])
        break
      case "second":
        this._holder.titles.next(this._holder.titles.getValue().concat([event.series]))
        break
    }
    var newData = []
    for ( let key in csvdata ) {
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
      let pushedData =  {
        name: key,
        series: [
          { name: "Incident", value: incidentTickets, extra: { drill: "second", service: event.extra.service } },
          { name: "", value: "", extra: { drill: "first", service: key } },
          { name: "WIP", value: wipTickets, extra: { drill: "second", service: event.extra.service } },
          { name: "Sleep", value: sleepTickets, extra: { drill: "second", service: event.extra.service } },
          { name: "Assigned", value: assignedTickets, extra: { drill: "second", service: event.extra.service } }
        ]
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
      80
    )
  }
 
 resetData(){
  var csvdata = this._data.system.filter(type => type[0] == 'S5')
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
    let pushedData =  {name: key, "series": [
                      {name: "Incident", value: incidentTickets, extra: {drill: "first", service: key}},
                      {name: "", value: "", extra: {drill: "first", service: key}},
                      {name: "WIP", value: wipTickets, extra: {drill: "first", service: key}},
                      {name: "Sleep", value: sleepTickets, extra: {drill: "first", service: key}},
                      {name: "Assigned", value: assignedTickets, extra: {drill: "first", service: key}}]
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
    50
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
  colorScheme = {
    domain: ['#00bcd4','lightgrey', '#ffb74d', '#7e57c2', '#039be5']
  }
}

export interface PIRData {
  tickets: any[]
  configColumns: any
}


