import { Pipe, PipeTransform } from '@angular/core';

declare const moment: any

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  transform(date: string): any {
    if (date === undefined) {
      return moment()
    }
    return moment(date, ['YYYY[M]MM', 'MMM D, YYYY H:mm:ss A', 'DD.MM.YYYY HH:mm'])
  }

}
