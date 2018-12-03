import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(text: string, chars: number): string {
    if (!text) return ''
    if (!chars) return text
    if (text.length > chars) {
      return text.substring(0, chars) + '...'
    } else {
      return text
    }
  }

}
