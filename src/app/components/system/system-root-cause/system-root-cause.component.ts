import { Component, OnInit, ChangeDetectionStrategy, Host, OnDestroy } from '@angular/core';
import { SystemGraphicHolderComponent } from '@components/system/system-graphic-holder/system-graphic-holder.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { KeyPair, Config } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { ToolsService, SubSink } from '@services/tools.service';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { TicketsState, Tickets } from '@states/tickets.state';

@Component({
  selector: 'cism-system-root-cause',
  templateUrl: './system-root-cause.component.html',
  styleUrls: ['./system-root-cause.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRootCauseComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  ngOnDestroy = () => this.subs.unsubscribe()

  constructor(
    private _data: DataService,
    private _tools: ToolsService,
    private _router: Router,
    private _store: Store,
    @Host() private _holder: SystemGraphicHolderComponent
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config)
    this._holder.titles.next([this.config.system.titles.S3])
    this.ie = this._tools.isIE()
  }

  config: Config

  groups:any;
  
  @Select(TicketsState) tickets$: Observable<Tickets>
  
  ngOnInit() {
    this.subs.sink = this.tickets$.subscribe(tickets => {
      this.groups = this._tools.classifyByIndex(tickets.tickets, this.config.columns.service)
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
      this.drawChart()
    })
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
