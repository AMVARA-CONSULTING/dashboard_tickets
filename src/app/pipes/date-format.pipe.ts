import { Pipe, PipeTransform } from '@angular/core';

declare const moment: any

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: any, format: string): string {
    return date.format(format)
  }

}
