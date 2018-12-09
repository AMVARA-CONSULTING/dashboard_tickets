import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'dateLocale'
})
export class DateLocalePipe implements PipeTransform {

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(date: any, lang: string): any {
    return date.locale(lang)
  }

}
