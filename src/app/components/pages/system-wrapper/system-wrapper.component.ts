import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-system-wrapper',
  templateUrl: './system-wrapper.component.html',
  styleUrls: ['./system-wrapper.component.scss']
})
export class SystemWrapperComponent implements OnInit {

  constructor(
    private _data: DataService
  ) { }

  ngOnInit() {
    console.log(this._data.allTickets)
  }

}
