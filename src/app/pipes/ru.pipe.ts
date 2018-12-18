import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'ru' // Remove Underscores
})
export class RuPipe implements PipeTransform {

  @memo()
  transform(value: string): string {
    value = value.replace(/_/g, ' ')
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

}
