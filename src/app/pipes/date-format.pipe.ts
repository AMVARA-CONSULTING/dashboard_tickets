import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns'

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date, formato: string): string {
    return format(date, formato)
  }

}
