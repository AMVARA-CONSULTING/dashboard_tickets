import { Pipe, PipeTransform } from '@angular/core';
import { parse } from 'date-fns'

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  transform(date: string, format: string): any {
    if (date === undefined) {
      return new Date()
    }
    return parse(date, format, new Date())
  }

}
