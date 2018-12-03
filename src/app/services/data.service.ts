import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor() {
    this.isMobile = window.screen.width <= 800
    this.opened = new BehaviorSubject<boolean>(false)
    this.loading = new BehaviorSubject<boolean>(false)
  }

  currentLevel: number
  month: BehaviorSubject<{ month: string, index: number }>

  disabledAnimations: boolean = false

  // Used to don't calculate totals if comes from L1
  count: number = 0
  percent: number = 0
  barchart = []

  loadingTickets: boolean = true

  tickets = []
  initialRows = []

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

  hideClosed: boolean = true

  pagination = [10, 20, 50, 100]
}
