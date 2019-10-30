import { Injectable } from '@angular/core';
import memo from 'memo-decorator';

@Injectable()
export class ToolsService {

  constructor() { }

  log(classe: string, ...args: any[]) {
    const texts = []
    const objects = []
    const arrays = []
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        arrays.push(arg)
        return
      }
      if (typeof arg === 'object') {
        objects.push(arg)
        return
      }
      if (typeof arg === 'number') {
        texts.push(arg)
        return
      }
      if (typeof arg === 'string') {
        texts.push(arg)
      }
    })
    console.log("%cAMVARA %c| %c"+classe+"%c | "+texts.join(' '), 'color:#1976d2;font-weight:bold;', 'color:#37474f;', 'color:#009688;font-weight:bold;', 'color:#37474f;', ...objects, ...arrays)
  }

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

  formatPercent(percent: number): number {
    return Math.round(percent * 100) / 100
  }

}
