import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor() {
    const actualMonth = moment().format('YYYY[M]MM')
    this.month = new BehaviorSubject<string>(actualMonth)
    this.isMobile = window.screen.width <= 800
  }

  currentLevel: number
  month: BehaviorSubject<string>

  initialRows = []

  isMobile: boolean = false
}
