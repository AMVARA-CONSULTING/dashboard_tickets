import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  transform(date: string, format: string): any {
    if (date === undefined) {
      return dayjs()
    }
    return dayjs(date, format)
  }

}
