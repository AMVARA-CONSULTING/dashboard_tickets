import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor() {
    const actualMonth = moment().format('YYYY[M]MM')
    this.month = new BehaviorSubject<string>(actualMonth)
    this.isMobile = window.screen.width <= 800
    this.opened= new BehaviorSubject<boolean>(false)

    this.opened.subscribe(open => {
      this.openedSidenav = open
      setTimeout(_ => {
        window.scrollTo(0, 0);
      },200)
    })
  }

  currentLevel: number
  month: BehaviorSubject<string>

  // Used to don't calculate totals if comes from L1
  count: number = 0
  percent: number = 0

  loadingTickets: boolean = true

  tickets = []
  initialRows = []

  isMobile: boolean = false
  opened: BehaviorSubject<boolean>

  openedSidenav: boolean = false
}
