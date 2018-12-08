import { Pipe, PipeTransform } from '@angular/core';

declare const moment: any

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  transform(date: string, format: string): any {
    return moment(date, format)
  }

}
