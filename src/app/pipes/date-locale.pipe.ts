import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocale'
})
export class DateLocalePipe implements PipeTransform {

  transform(date: any, lang: string): any {
    return date.locale(lang)
  }

}
