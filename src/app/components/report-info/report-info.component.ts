import { Component, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ConfigService } from '@services/config.service';
import * as moment from 'moment';

@Component({
  selector: 'report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportInfoComponent implements OnChanges {

  constructor(
    public config: ConfigService,
    private ref: ChangeDetectorRef
  ) { }

  @Input() prop

  ngOnChanges(changes: SimpleChanges) {
    this.date = changes.prop.currentValue.value.date
    console.log(changes.prop.currentValue)
  }

  date

}
