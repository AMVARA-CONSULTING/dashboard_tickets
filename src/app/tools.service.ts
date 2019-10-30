import { Injectable } from '@angular/core';
import memo from 'memo-decorator';
import { Observable } from 'rxjs/internal/Observable';

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

  supportsTransferableObjects(): boolean {
    return "TextDecoder" in window && "TextDecoder" in window
  }
  
  /**
   * WorkerRunner: This method is used to create a WebWorker with the following advantages:
   * - Create a WebWorker without any external script file
   * - Runs script within a scope declared function
   * - Runs parallel to the Browser, supporting multiple CPU processes
   * - Transfers the data passed to the WebWorker using ArrayBuffers if it's supported
   * @param task Function used inside the WebWorker, MUST use returnResult function to get the result
   * @param data Data to be passed to the function in the WebWorker.
   * @returns Observable<any>
   */
  WorkerRunner(task: Function, data: any): Observable<any> {
    return new Observable(observer => {
      // Convert the function to string
      const taskRunner = task.toString()
      let webWorkerTemplate = `
        self.addEventListener('message', function(e) {
          var data = JSON.parse(e.data);
          postMessage((${taskRunner})(data));
        });
      `;
      // If the browser supports Transferable Objects, take advantage of them
      if (this.supportsTransferableObjects()) {
        webWorkerTemplate = `
          var decoder = new TextDecoder('utf-8');
          self.addEventListener('message', function(e) {
            var data = JSON.parse(decoder.decode(e.data));
            postMessage((${taskRunner})(data));
          });
        `;
      }
      // Add the function to return the results
      webWorkerTemplate += `
        function returnResult(data) {
          postMessage([{
            result: data,
          }]);
          close();
        }
      `;
      // Create blob file for the WebWorker, this avoids having to use an external script file
      const blob = new Blob([webWorkerTemplate], { type: 'text/javascript' })
      // Create the WebWorker
      const worker = new Worker(URL.createObjectURL(blob))
      // If the browser supports Transferable Objects, take advantage of them
      if (this.supportsTransferableObjects()) {
        const buffer = this.toArrayBuffer(data)
        worker.postMessage(buffer, [buffer.buffer])
      } else {
        worker.postMessage(data)
      }
      // Observable results handling
      worker.onmessage = e => {
        observer.next(e.data)
        observer.complete()
        worker.terminate()
      }
    })
  }

  encoding: string

  /**
   * Returns a Uint8Array buffer from any object
   *
   * @param obj Object to encode
   */
  toArrayBuffer(obj): Uint8Array {
    const txt = JSON.stringify(obj)
    const encoder = new TextEncoder()
    this.encoding = encoder.encoding
    return encoder.encode(txt)
  }

  /**
   * Returns an object from a Uint8array
   *
   * @param buffer Buffer to decode
   */
  fromArrayBuffer(buffer): string {
    const decoder = new TextDecoder(this.encoding);
    return JSON.parse(decoder.decode(buffer))
  }

  /**
   * Sums values of an array collection
   * @param array An array containing other arrays
   * @param i A number defining the index of the desired value to make the sum
   */
  sumByIndex(array: any[], i: number): any {
    return array.reduce((a, b) => a + b[i], 0)
  }

  /**
   * Generates a CSV File
   * @param headers An array containing all header fields title
   * @param array Array of the data
   * @param columns An array containing all index to use as columns
   */
  generateCSV(headers: string[], data: any[], columns: number[] | string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const rows = []
      // Push Headers
      rows.push(headers)
      // Get only specific columns from data
      data.forEach(dat => {
        const toPush = []
        // @ts-ignore
        columns.forEach(index => toPush.push(dat[index]))
        rows.push(toPush)
      })
      let csvContent = 'data:text/csvcharset=utf-8,'
      rows.forEach((row: any[]) => {
        const rowB = row.join('')
        csvContent += rowB + '\r\n'
      })
      resolve(csvContent)
    })
  }

  /**
   * Download a CSV Encoded file
   * @param content CSV Encoded data
   * @param name Name of the CSV File
   */
  downloadCSV(content, name): void {
    const encodedUri = encodeURI(content)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', name + '.csv')
    document.body.appendChild(link)
    link.click()
  }

  /**
   * Classifies an array collection based on an index
   * @param array An array containing other arrays
   * @param index A number defining the index of the desired value to pivoting
   */
  classifyByIndex(array: any[], index: number): any {
    return array.reduce((r, a) => {
      r[a[index]] = r[a[index]] || []
      r[a[index]].push(a)
      return r
    }, {})
  }

  /* Returns a random integer between min (inclusive) and max (inclusive)
  * Using Math.round() will give you a non-uniform distribution!
  */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  /* Return a percent number with/without sign */
  percent(part: number, total: number, sign?: boolean, space_between?: boolean, zeroSign?: boolean): number | string {
    sign = sign || false
    space_between = space_between || false
    zeroSign = zeroSign || false
    if (zeroSign && total === 0) {
      return '-'
    }
    if (sign) {
      return parseInt(((part * 100) / total).toFixed(0), 10) + (space_between ? ' ' : '') + '%'
    } else {
      return parseInt(((part * 100) / total).toFixed(0), 10)
    }
  }

  /* sortBy native alternative to Underscore */
  sortBy(collection: any[], iterator) {
    const isString = typeof iterator === 'string'
    return collection.sort(function (x, y) {
      return isString ? x[iterator] - y[iterator] : iterator(x) - iterator(y)
    })
  }

}
