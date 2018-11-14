import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cism-overall-box',
  templateUrl: './overall-box.component.html',
  styleUrls: ['./overall-box.component.scss']
})
export class OverallBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() total: number = 0

}
