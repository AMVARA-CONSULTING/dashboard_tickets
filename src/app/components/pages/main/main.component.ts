import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'cism-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public data: DataService
  ) { }

  ngOnInit() {
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

}
