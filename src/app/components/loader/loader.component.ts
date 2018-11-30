import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
    public data: DataService
  ) { }

  ngOnInit() {
  }

}
