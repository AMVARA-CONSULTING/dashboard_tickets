import { Component } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  constructor(
    public data: DataService
  ) { }

}
