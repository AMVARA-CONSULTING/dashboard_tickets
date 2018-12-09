import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
declare const moment: any

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(date: any, format: string): string {
    return date.format(format)
  }

}
