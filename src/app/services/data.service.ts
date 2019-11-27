import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Month } from '@other/interfaces';
declare const moment: any

@Injectable()
export class DataService {

  constructor() {
    this.isMobile = window.screen.width <= 800
    this.opened = new BehaviorSubject<boolean>(false)
    this.loading = new BehaviorSubject<boolean>(false)
  }

  currentLevel: number
  month: BehaviorSubject<Month>
  months = [...Array(12).keys()].map(i => moment().subtract(i, 'months').format('YYYY[M]MM'))
  availableMonths = []

  disabledAnimations: boolean = false

  // Used to don't calculate totals if comes from L1
  count: number = 0
  percent: number = 0
  barchart = []

  loadingTickets: boolean = true

  tickets = []
  allTickets = []
  initialRows = []
  system = []

  isMobile: boolean = false
  opened: BehaviorSubject<boolean>

  chart: any[] = []
  silt: any[] = []
  priority: any[] = []
  service: any[] = []
  status: any[] = []
  type: any[] = []
  overall: any[] = []

  loading: BehaviorSubject<boolean>

  hideClosed: boolean = false

  pagination = [10, 20, 50, 100]
}
