import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore'
import * as moment from 'moment'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any[], prop: string, order: string): any[] {
    if (!values) return []
    if (order !== '') {
      switch(prop) {
        case "priority":
          values = _.sortBy(values, num => num[prop])
          break
        case "updated":
          values = _.sortBy(values, date => moment(date[prop], 'DD.MM.YYYY HH:mm'))
          break
        default:
          values = _.sortBy(values, el => el[prop])
      }
      if (order == 'desc') {
        return [].concat(values).reverse()
      }
      return [].concat(values)
    }
    return [].concat(values)
  }

}
