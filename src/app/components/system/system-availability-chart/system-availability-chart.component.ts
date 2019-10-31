import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SAViewType } from '@other/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'cism-system-availability-chart',
  templateUrl: './system-availability-chart.component.html',
  styleUrls: ['./system-availability-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAvailabilityChartComponent implements OnInit {

  ngOnInit() {
    let newData = []
    if (this.type == 'daily') {
      this.data.forEach(row => {
        newData.push({
          "name": row[1],
          "value": row[2]
        })
      })
    }
    this.chartData.next([
      {
        "name": "System Availability",
        "series": newData
      }
    ])
  }

  chartData = new BehaviorSubject<Object[]>([])

  @Input() data: any[] = []
  @Input() type: SAViewType
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#00bcd4']
  }

}
