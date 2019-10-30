import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

type CallbackFunction = () => void;

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() {
    this.supportsTransferableObjects = "TextDecoder" in window && "TextEncoder" in window
  }

  private supportsTransferableObjects: boolean = false

  /**
   * WorkerService: This method is used to create a WebWorker with the following advantages:
   * 
   * - No need of any external script file
   * - Runs script within a scope declared function
   * - Runs parallel to the Browser, supporting multiple CPU processes
   * - Transfers the data passed to the WebWorker using ArrayBuffers if it's supported
   * - Supports external JS plugins, which should be in assets/js/ folder
   * 
   * WHEN YOU SHOULD USE IT:
   * - Use this WebWorker creator to highly optimize heavy processing operations without blocking the UI.
   * - The WebWorker instatiation takes 50-200ms, so don't use it if the operation is simple or fast enough.
   * - WebWorkers have no access to main UI context, so make sure you pass all data and scripts you need to run it.
   * 
   * @param {Function} workerFunction - Function used inside the WebWorker, MUST use returnResult function to get the result
   * @param {any} data - to be passed to the function in the WebWorker.
   * @param {string[]} scripts - Array of JS script files to preload in the WebWorker, the scripts have to be located in assets/js/
   * 
   * @returns Observable<T>
   */
  run<T>(workerFunction: (input: any) => T, data?: any, scripts: string[] = []): Observable<T> {
    return new Observable(observer => {
      const resolveString = workerFunction.toString()
      const path = location.protocol + "//" + location.host
      if (this.supportsTransferableObjects) {
        this.encoding = new TextDecoder('utf-8').encoding
      }
      let webWorkerTemplate = '';
      if (scripts.length > 0) {
        console.log("The WebWorker will fetch these scripts:")
        scripts.forEach(script => {
          console.log(`${path}/assets/js/${script}.js`)
        })
        const scriptFiles = scripts.map(script => `'${path}/assets/js/${script}.js'`)
        webWorkerTemplate += `
          importScripts(${scriptFiles.join(',')});
        `;
      }
      if (this.supportsTransferableObjects) {
        webWorkerTemplate += `
          var decoder = new TextDecoder('utf-8');
          self.addEventListener('message', function(e) {
            var data = JSON.parse(decoder.decode(e.data));
            var encoder = new TextEncoder();
            postMessage(encoder.encode(JSON.stringify((${resolveString})(data))));
            close();
          });
        `;
      } else {
        webWorkerTemplate += `
        self.addEventListener('message', function(e) {
          postMessage(encoder.encode(JSON.stringify((${resolveString})(e.data))));
          close();
        });
      `;
      }
      const blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });
      const worker = new Worker(URL.createObjectURL(blob))
      worker.onmessage = ({ data }) => {
        if (this.supportsTransferableObjects) {
          observer.next(this.fromArrayBuffer(data))
        } else {
          observer.next(data)
        }
        worker.terminate()
        observer.complete()
      }
      worker.onerror = event => {
        observer.error(event)
        observer.complete()
      }
      if (this.supportsTransferableObjects) {
        const buffer = this.toArrayBuffer(data)
        worker.postMessage(buffer, [buffer.buffer]);
      } else {
        worker.postMessage(data);
      }
    }) 
  }

  private fromArrayBuffer(buffer): any {
    const decoder = new TextDecoder('utf-8');
    return JSON.parse(decoder.decode(buffer))
  }
  
  private encoding: string

  private toArrayBuffer(obj): Uint8Array {
    const txt = JSON.stringify(obj)
    const encoder = new TextEncoder()
    this.encoding = encoder.encoding
    return encoder.encode(txt)
  }

}