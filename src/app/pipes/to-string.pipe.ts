import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  @memo()
  transform(value: any): string {
    return value.toString()
  }

}
