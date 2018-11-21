import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cism-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('open', [
      state('false', style({ transform: 'translateX(100%)' })),
      state('true', style({ transform: 'translateX(0)' })),
      transition('* => *', animate('300ms cubic-bezier(0.645,0.045,0.355,1.000)'))
    ])
  ],
  host: {
    '[@open]': 'opened'
  }
})
export class SidenavComponent implements OnInit {

  constructor(
    private data: DataService
  ) {
    this.data.opened.subscribe(open => {
      this.opened = open
      console.log(open)
    })
  }

  opened: boolean = true

  ngOnInit() {
  }

}
