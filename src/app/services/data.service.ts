import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Month } from '@other/interfaces';
import { subMonths, format } from 'date-fns'

@Injectable()
export class DataService {

  constructor() {
    this.isMobile = window.screen.width <= 800
    this.opened = new BehaviorSubject<boolean>(false)
    this.loading = new BehaviorSubject<boolean>(false)
  }

  currentLevel: number
  month: BehaviorSubject<Month>
  months = [...Array(12).keys()].map(i => {
    const date = subMonths(new Date(), i)

    /*Files at assets/reports doesnt contain any data in range of year 2021 or 2022, so application doesnt show anything
      We manually set date back to year 2020, in order to make demo presentable
      NOTE! --- IN PRODUCTION THIS WILL PROVIDE WRONG INFORMATION, AS DATE IS FIXED AND WILL ALWAYS SHOW THE SAME INFO
      THIS IS DEMO ONLY, DELETE IN PRODUCTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    date.setFullYear(2020);

    return format(date, "yyyy'M'MM")
  })
  availableMonths = []

  disabledAnimations: boolean = false

  // Used to don't calculate totals if comes from L1
  count: number = 0
  percent: number = 0
  barchart = []

  loadingTickets: boolean = true

  isMobile: boolean = false
  opened: BehaviorSubject<boolean>

  loading: BehaviorSubject<boolean>

  hideClosed: boolean = false

  pagination = [10, 20, 50, 100]
}
