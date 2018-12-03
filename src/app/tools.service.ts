import { Injectable } from '@angular/core';
import memo from 'memo-decorator';

@Injectable()
export class ToolsService {

  constructor() { }

  /**
   * Return a WebWorker object
   * 
   * @param foo Function to execute in background
   */
  BuildWebWorker(foo: Function): Worker {
    const str = foo.toString().match(/^\s*function\s*\(\s*\)\s*\{(([\s\S](?!\}$))*[\s\S])/)[1]
    return new Worker(window.URL.createObjectURL(new Blob([str], { type: 'text/javascript' })))
  }

  xsrf_token

  @memo((...args: any[]): string => JSON.stringify(args))
  isIE(): boolean {
    const ua = window.navigator.userAgent
    return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1
  }

}
