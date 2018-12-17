import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'fixFilter'
})
export class FixFilterPipe implements PipeTransform {

  transform(filters: any[]): any[] {
    console.log(filters)
    // @ts-ignore
    window.filters = filters
    const newList = []
    const length = filters.length
    for ( let i = 0; i < length; i++ ) {
      if (filters[i].key === 'id') {
        filters[i].key = 'Ticket ID'
      }
      if (filters[i].key !== 'month_id') {
        newList.push(filters[i])
      }
    }
    return newList
  }

}
