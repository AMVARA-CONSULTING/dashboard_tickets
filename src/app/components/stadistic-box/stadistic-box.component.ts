import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cism-stadistic-box',
  templateUrl: './stadistic-box.component.html',
  styleUrls: ['./stadistic-box.component.scss']
})
export class StadisticBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string = ''

  rippleColor: string = 'rgba(255,255,255,.08)'

}
