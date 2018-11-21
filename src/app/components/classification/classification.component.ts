import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cism-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() paramValue: string = ''
  @Input() paramType: string = ''
  @Input() total: number = 0
  @Input() percent: number = 0

}
