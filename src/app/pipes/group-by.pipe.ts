import { Pipe, PipeTransform } from '@angular/core';
import { ToolsService } from '@services/tools.service';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  constructor (
    private _tools: ToolsService
  ) { }

  transform(values: any[], group: any): any[] {
    if (!values) return []
    return this._tools.chunkArray(values, group)
  }

}
