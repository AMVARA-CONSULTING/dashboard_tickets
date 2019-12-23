import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ru' // Remove Underscores
})
export class RuPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/_/g, ' ')
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

}
