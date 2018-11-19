import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

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
