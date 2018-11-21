import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'cism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
  }

  open() {
    this.data.opened.next(!this.data.opened.value)
  }

}
