import { Pipe, PipeTransform } from '@angular/core';
import { parse, isValid } from 'date-fns'

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  transform(date: string, format: string): any {
    if (date === undefined) {
      return new Date()
    }
    if (!format) {
      const parsed = parse(date, 'MMM d, yyyy h:mm:ss a', new Date())
      if (!isValid(parsed)) return new Date()
      return parsed
    }
    return parse(date, format, new Date())
  }

}
