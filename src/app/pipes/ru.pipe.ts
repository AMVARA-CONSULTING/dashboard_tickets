import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'ru' // Remove Underscores
})
export class RuPipe implements PipeTransform {

  @memo()
  transform(value: string): string {
    return value.replace(/_/g, ' ')
  }

}
