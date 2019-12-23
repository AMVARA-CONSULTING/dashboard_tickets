import { Component, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportInfoComponent implements OnChanges {

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  @Input() prop

  ngOnChanges(changes: SimpleChanges) {
    this.date = changes.prop.currentValue.value.date
  }

  date

}
