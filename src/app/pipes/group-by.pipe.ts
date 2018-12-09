import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
import memo from 'memo-decorator';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(values: any[], group: any): any[] {
    if (!values) return []
    return _.chain(values).groupBy((el, index) => Math.floor(index / group)).toArray().value()
  }

}
