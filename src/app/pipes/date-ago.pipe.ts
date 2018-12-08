import { Pipe, PipeTransform } from '@angular/core';

declare const moment: any

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(date: any): string {
    return date.fromNow()
  }

}
