import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '@services/config.service';
import memo from 'memo-decorator'

@Pipe({
  name: 'hideClosed'
})
export class HideClosedPipe implements PipeTransform {

  constructor(
    private config: ConfigService
  ) { }

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(values: any[], hide: boolean): any[] {
    if (!values) return []
    return hide ? values.filter(row => row[this.config.config.columns.status] != 'Closed') : values
  }

}
