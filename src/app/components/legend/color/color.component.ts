import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cism-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() color: string = ''
  @Input() name: string = ''

}
