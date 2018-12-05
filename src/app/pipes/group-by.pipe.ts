import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(values: any[], group: any): any[] {
    if (!values) return []
    console.log(_.chain(values).groupBy((el, index) => Math.floor(index / group)).toArray().value())
    return _.chain(values).groupBy((el, index) => Math.floor(index / group)).toArray().value()
  }

}
