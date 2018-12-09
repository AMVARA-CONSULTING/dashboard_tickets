import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

declare const moment: any

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  @memo()
  transform(date: any): string {
    return date.fromNow()
  }

}
