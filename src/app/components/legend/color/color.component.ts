import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cism-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() color: string = ''
  @Input() name: string = ''

}
