import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

declare const moment: any

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  @memo()
  transform(date: string): any {
    if (date.length === 7) {
      return moment(date, 'YYYY[M]MM')
    } else if (date.indexOf(',') > -1) {
      return moment(date, 'MMM D, YYYY H:mm:ss A')
    } else {
      return moment(date, 'DD.MM.YYYY HH:mm')
    }
  }

}
