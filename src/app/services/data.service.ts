import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor() {
    const actualMonth = moment().format('YYYY[M]MM')
    this.month = new BehaviorSubject<string>(actualMonth)
  }

  currentLevel: number
  month: BehaviorSubject<string>
}
