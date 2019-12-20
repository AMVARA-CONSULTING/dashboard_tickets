import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceStrict } from 'date-fns'

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(date: Date): string {
    return formatDistanceStrict(date, new Date()) + ' ago'
  }

}
