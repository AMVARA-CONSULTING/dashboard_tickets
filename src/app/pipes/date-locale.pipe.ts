import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '@services/config.service';

@Pipe({
  name: 'dateLocale'
})
export class DateLocalePipe implements PipeTransform {

  constructor(
    private _config: ConfigService
  ) { }

  transform(date: any): any {
    return date.locale(this._config.config.language)
  }

}
