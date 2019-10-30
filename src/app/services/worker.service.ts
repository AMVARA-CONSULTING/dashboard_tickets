import { Injectable } from '@angular/core';

type CallbackFunction = () => void;

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workerFunctionToUrlMap = new WeakMap<CallbackFunction, string>();
  private promiseToWorkerMap = new WeakMap<Promise<any>, Worker>();

  private supportsTransferableObjects(): boolean {
    return "TextDecoder" in window && "TextEncoder" in window;
  }

  /**
   * WorkerService: This method is used to create a WebWorker with the following advantages:
   * - Create a WebWorker without any external script file
   * - Runs script within a scope declared function
   * - Runs parallel to the Browser, supporting multiple CPU processes
   * - Transfers the data passed to the WebWorker using ArrayBuffers if it's supported
   * - Supports external JS plugins, which should
   * @param workerFunction Function used inside the WebWorker, MUST use returnResult function to get the result
   * @param data Data to be passed to the function in the WebWorker.
   * @returns Observable<any>
   */
  run<T>(workerFunction: (input: any) => T, data?: any, scripts: string[] = []): Promise<T> {
    // scripts.unshift('text-encoder');
    const url = this.getOrCreateWorkerUrl(workerFunction, scripts);
    return this.runUrl(url, data);
  }

  runUrl(url: string, data?: any): Promise<any> {
    const worker = new Worker(url);
    const promise = this.createPromiseForWorker(worker, data);
    const promiseCleaner = this.createPromiseCleaner(promise);

    this.promiseToWorkerMap.set(promise, worker);

    promise.then(promiseCleaner).catch(promiseCleaner);

    return promise;
  }

  terminate<T>(promise: Promise<T>): Promise<T> {
    return this.removePromise(promise);
  }

  getWorker(promise: Promise<any>): Worker {
    return this.promiseToWorkerMap.get(promise);
  }

  private fromArrayBuffer(buffer): any {
    const decoder = new TextDecoder(this.encoding);
    return JSON.parse(decoder.decode(buffer))
  }

  private createPromiseForWorker<T>(worker: Worker, data: any) {
    return new Promise<T>((resolve, reject) => {
      worker.addEventListener('message', (event) => {
        if (this.supportsTransferableObjects()) {
          resolve(this.fromArrayBuffer(event.data))
        } else {
          resolve(event.data)
        }
      });
      worker.addEventListener('error', reject);
      if (this.supportsTransferableObjects()) {
        const buffer = this.toArrayBuffer(data)
        worker.postMessage(buffer, [buffer.buffer]);
      } else {
        worker.postMessage(data);
      }
    });
  }

  private getOrCreateWorkerUrl(fn: any, scripts: string[] = []): string {
    if (!this.workerFunctionToUrlMap.has(fn)) {
      const url = this.createWorkerUrl(fn, scripts);
      this.workerFunctionToUrlMap.set(fn, url);
      return url;
    }
    return this.workerFunctionToUrlMap.get(fn);
  }
  
  private encoding: string

  private toArrayBuffer(obj): Uint8Array {
    const txt = JSON.stringify(obj)
    const encoder = new TextEncoder()
    this.encoding = encoder.encoding
    return encoder.encode(txt)
  }

  private createWorkerUrl(resolve: CallbackFunction, scripts: string[] = []): string {
    const resolveString = resolve.toString();
    if (this.supportsTransferableObjects()) {
      this.encoding = new TextDecoder().encoding
    }
    let webWorkerTemplate = '';
    webWorkerTemplate += `
      var url = new URL(location.href.split('blob:')[1]);
      var path = url.protocol + "//" + url.host;
    `;
    if (scripts.length > 0) {
      scripts.forEach(script => {
        webWorkerTemplate += `
          console.log("WebWorker | Fetching external script ... " + path + '/assets/js/${script}.js');
          importScripts(path + '/assets/js/${script}.js');
        `;
      })
    }
    if (this.supportsTransferableObjects()) {
      webWorkerTemplate += `
        var decoder = new TextDecoder('utf-8');
        self.addEventListener('message', function(e) {
          var data = JSON.parse(decoder.decode(e.data));
          var encoder = new TextEncoder();
          postMessage(encoder.encode(JSON.stringify((${resolveString})(data))));
        });
      `;
    } else {
      webWorkerTemplate += `
      self.addEventListener('message', function(e) {
        postMessage((${resolveString})(e.data));
      });
    `;
    }
    const blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });
    return URL.createObjectURL(blob);
  }

  private createPromiseCleaner<T>(promise: Promise<T>): (input: any) => T {
    return (event) => {
      this.removePromise(promise);
      return event;
    };
  }

  private removePromise<T>(promise: Promise<T>): Promise<T> {
    const worker = this.promiseToWorkerMap.get(promise);
    if (worker) {
      worker.terminate();
    }
    this.promiseToWorkerMap.delete(promise);
    return promise;
  }
}
