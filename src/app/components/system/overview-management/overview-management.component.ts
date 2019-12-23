import { Component, OnInit, ChangeDetectionStrategy, Host, ViewChild, OnDestroy} from '@angular/core';
import { ToolsService } from '@services/tools.service';
import { DataService } from '@services/data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SystemScrollerComponent } from '@components/system/system-scroller/system-scroller.component';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/internal/operators/filter';
import { distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Config } from '@other/interfaces';

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
    private _store: Store,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config)
    this._holder.titles.next([this.config.system.titles.S5])
  }

  config: Config

  // This function is executed when this component is destroyed
  ngOnDestroy() {
    if (this.titleChangeSub) this.titleChangeSub.unsubscribe()
  }

  @ViewChild(SystemScrollerComponent, { static: true }) _scroller: SystemScrollerComponent  
  ngOnInit() {
    // Handle title click change
    this.titleChangeSub = this._holder.click.pipe(
      distinctUntilChanged(),
      filter(val => val != null && val.titles[0] == this.config.system.titles.S5)
    ).subscribe(titleChanged => {
      console.log(titleChanged)
      switch(titleChanged.indexClicked){
        case 0: 
          this.changeData();
          this._holder.titles.next([this.config.system.titles.S5])
          break;
        case 1:
          this.changeData({
            series: titleChanged.nameClicked,
            extra: {
              drill: 2,
              service: titleChanged.nameClicked
            }
          })
          this._holder.titles.next([this.config.system.titles.S5, titleChanged.nameClicked])
          break
        default:
      }
    })
    this.changeData()
  }

  changeData(event?){
    const nextDrill = event ? event.extra.drill : 1
    // Only accepts 3 levels
    if (nextDrill >= 1 && nextDrill <= 3) {
      // Check if it's default drill, first drill, or second drill
      let csvdata = this._data.system.filter(type => type[0] == 'S5')
      if (event !== undefined) {
        csvdata = csvdata.filter(type => type[7] == event.extra.service)
        if (nextDrill == 3) {
          csvdata = csvdata.filter(type => type[8] == event.series)
        }
        if (nextDrill == 2) {
          csvdata = this._tools.classifyByIndex(csvdata, this.config.columns.external)
        } else {
          csvdata = this._tools.classifyByIndex(csvdata, this.config.columns.classification)
        }
      } else {
        csvdata = this._tools.classifyByIndex(csvdata, this.config.columns.description)
      }
      if (event !== undefined) {
        switch (nextDrill) {
          case 2:
            this._holder.titles.next([this.config.system.titles.S5, event.extra.service])
            break
          case 3:
            this._holder.titles.next(this._holder.titles.getValue().concat([event.series]))
            break
          default:
        }
      }
      const newData = Object.keys(csvdata).map(key => {
        let incidentTickets = this._tools.sumByIndex(csvdata[key], 2)
        let wipTickets = this._tools.sumByIndex(csvdata[key], 3)
        let sleepTickets = this._tools.sumByIndex(csvdata[key], 4)
        let assignedTickets = this._tools.sumByIndex(csvdata[key], 5)
        const drill = {
          drill: event !== undefined ? nextDrill + 1 : 2,
          service: event !== undefined ? event.extra.service : key
        }
        return {
          name: key,
          series: [
            { name: "Incident", value: incidentTickets, extra: drill },
            { name: "", value: "", extra: drill },
            { name: "WIP", value: wipTickets, extra: drill },
            { name: "Sleep", value: sleepTickets, extra: drill },
            { name: "Assigned", value: assignedTickets, extra: drill }
          ]
        }
      })
      this.chartData.next(newData)
      this._scroller.bars.next(newData.length)
      this._scroller.barsWidth.next(100)
    }
  }

  // options
  colorScheme = {
    domain: ['#00bcd4','lightgrey', '#ffb74d', '#7e57c2', '#039be5']
  }
}

export interface PIRData {
  tickets: any[]
  configColumns: any
}