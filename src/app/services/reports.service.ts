import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '@services/data.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Config } from '@other/interfaces';
import { ToolsService } from './tools.service';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { MatSnackBar } from '@angular/material/snack-bar';
import { parse, isAfter } from 'date-fns';
import { Store } from '@ngxs/store';
import { SetConfig } from '@states/config.state';
import { UpdateTickets } from '@states/tickets.state';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError } from 'rxjs/internal/operators/catchError';

declare const JKL, XML: any

@Injectable()
export class ReportsService {

  constructor(
    private http: HttpClient,
    private data: DataService,
    private _tools: ToolsService,
    private _snack: MatSnackBar,
    private _store: Store
  ) {
    this.corpintra = location.hostname.indexOf('corpintra.net') > -1
    
  }

  api_url

  corpintra: boolean = false

  transcode(data) {
    const xotree = new XML.ObjTree()
    const dumper = new JKL.Dumper()
    return JSON.parse(dumper.dump(xotree.parseXML(data)))
  }

  getReportOverallData(key) {
    const config = this._store.selectSnapshot<Config>((state: any) => state.config)
    const keyData = config.reports[config.scenario][key]
    return this.getReportData( keyData.id, keyData.selector, keyData.fallback )
  }

  load(): Promise<void> {
    return new Promise(resolve => {
      this.data.disabledAnimations = this._tools.isIE();
      (document.querySelector('.progress-value') as HTMLElement).style.width = '35%';
      this.http.get('assets/config.json').subscribe((config: Config) => {
        (document.querySelector('.progress-value') as HTMLElement).style.width = '40%';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '45%';
        config.language = localStorage.getItem('lang') || config.language;
        if (location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
          config.portalFolder = '/analytics/bi/'
        }
        if (!!localStorage.getItem('hideClosed')) this.data.hideClosed = localStorage.getItem('hideClosed') === 'yes';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '50%';
        config.system.enable = localStorage.getItem('enableExperimentalFeatures') === 'yes' || false
        if (config.system.enable) {
          this._snack.open('CISM is running with Experimental Features enabled.', 'OK')
        }
        config.displayedColumns = JSON.parse(localStorage.getItem('displayedColumns')) || config.displayedColumnsDefault
        if (config.ticketOptions) config.displayedColumns.push('options');
        (document.querySelector('.progress-value') as HTMLElement).style.transitionDuration = config.delay + 'ms';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '100%';
        this._tools.log('Config', config)
        this._store.dispatch(new SetConfig(config))
        this.login().then(_ => resolve())
      });
    });
  }

  login(): Promise<void> {
    return new Promise(resolve => {
      const config = this._store.selectSnapshot<Config>((state: any) => state.config)
      if (location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
        this.loadInitialReport().then(_ => resolve())
      } else {
        console.log("Sending XHR to /analytics/bi/v1/notifications")
        this.http.get(`${config.fullUrl}${config.portalFolder}v1/notifications`, { observe: 'response', responseType: 'text' })
          .subscribe(
            _ => {
              console.log("XSRF Token was valid, load CISM")
              this.loadInitialReport().then(_ => resolve())
            },
            err => {
              console.log(err)
              // Login
              console.log("XSRF Token was invalid or undefined, load Login")
              const app: HTMLElement = document.querySelector('cism-root')
              app.style.display = 'none'
              const iframe = document.createElement("iframe")
              iframe.style.height = '100%'
              iframe.style.width = '100%'
              iframe.style.border = '0'
              iframe.src = `${config.fullUrl}${config.portalFolder}?pathRef=.public_folders%2FIWM_BI%2FIWM_BI%2FAMVARA_triggerCISM&ui_appbar=false&ui_navbar=false&format=HTML&Download=false`
              document.body.appendChild(iframe)
              // AMVARA_triggerCISM sended login is done
              window.top.document.addEventListener('complete', () => {
                console.log("Login done, load CISM")
                const app: HTMLElement = document.querySelector('cism-root')
                app.style.removeProperty('display')
                localStorage.setItem('cookies', iframe.contentWindow.document.cookie)
                window.top.document.body.querySelector('iframe').remove()
                // Make initial request to check user permissions
                this.getReportOverallData('barchart').subscribe(success => {
                  this.loadInitialReport().then(_ => resolve())
                }, error => {
                  alert(error)
                })
              })
            }
          )
      }
    })
  }

  loadInitialReport(): Promise<void> {
    return new Promise(resolve => {
      const config = this._store.selectSnapshot<Config>((state: any) => state.config);
      (document.querySelector('.progress-value') as HTMLElement).style.width = '5%';
      const jobs = [
        this.getReportOverallData('barchart'),
        this.getReportOverallData('overview_prio'),
        this.getReportOverallData('overview_service'),
        this.getReportOverallData('overview_silt'),
        this.getReportOverallData('overview_status'),
        this.getReportOverallData('overview_type'),
        this.getReportOverallData('overview_count')
      ]
      if (config.system.enable) {
        jobs.push(this.getReportData(config.reports[config.scenario].allMonths, config.reports[config.scenario].monthsSelector, 'Mobile_Tickets_List.csv'))
        jobs.push(this.getReportOverallData('system'))
      }
      forkJoin(...jobs).subscribe(data => {
        let tickets = []
        let ticketsReduced = []
        let systemRows = []
        if (config.system.enable) {
          tickets = data[7]
          ticketsReduced = tickets.map((ticket: any[]) => {
            return config.importantColumns.reduce((r, a) => {
              r.push(ticket[a])
              return r
            }, [])
          })
          if (config.excludeDatesFuture) {
            tickets = tickets.filter(row => !isAfter(parse(row[2], 'dd.MM.yyyy HH:mm', new Date()), new Date()))
          }
          systemRows = data[8]
          if (config.excludeDatesFuture) {
            systemRows = systemRows.filter(row => !isAfter(parse(row[1], 'MM/dd/yyyy', new Date()), new Date()))
          }
        }
        this.data.availableMonths = data[6].map(row => row[0]).reverse()
        const currentMonth = this.data.months.filter(month => this.data.availableMonths.indexOf(month) > -1)[0]
        const currentMonthIndex = this.data.months.findIndex(month => month == currentMonth)
        this.data.month = new BehaviorSubject<{ month: string, index: number }>({
          month: currentMonth,
          index: currentMonthIndex
        })
        this._store.dispatch(new UpdateTickets({
          chart: data[0],
          priority: data[1],
          service: data[2],
          silt: data[3],
          status: data[4],
          type: data[5],
          overall: data[6],
          tickets: tickets,
          ticketsReduced: ticketsReduced,
          system: systemRows
        }))
        resolve()
      })
    })
  }

  getReportData(ReportID: string, selector: string, fallback: string): Observable<any[]> {
    return new Observable(observer => {
      const config = this._store.selectSnapshot<Config>((state: any) => state.config)
      if (this.corpintra || config.corpintraMode) {
        this.http.get(`${config.fullUrl}${config.portalFolder}v1/objects/${ReportID}/versions`).pipe(
          map((json: any) => {
            if (json.data.length === 0) {
              alert('Looks like you don\'t have access to CISM')
              throwError('permission_denied')
            }
            return `${config.fullUrl}${json.data[0]._meta.links.outputs.url}`
          }), // Get outputs url
          switchMap((link: string) => this.http.get(link)), // Return the outputs response json
          map((json: any) => `${config.fullUrl}${json.data[0]._meta.links.content.url}`), // Get the last saved output url
          switchMap((link: string) => this.http.get(link, { responseType: 'text' })), // Return the content response as HTML
          map((json: any) => this.htmlToJson(json, selector)) // Convert HTML to JSON
        ).subscribe((json: any) => {
            observer.next(json)
            observer.complete()
          }, err => {
            if (config.system.enable) {
              this.giveFallback(fallback, observer)
              console.log(`${ReportID} is running in fallback mode`)
            } else {
              console.log(err)
              observer.complete()
            }
        })
      } else {
        this.giveFallback(fallback, observer)
      }
    })
  }

  giveFallback(fallback: string, observer: Subscriber<any[]>) {
    this.http.get('assets/reports/' + fallback, { responseType: 'text' })
    .pipe(
      map(data => this.csvToJson(data))
    )
    .subscribe(data => {
      observer.next(data)
      observer.complete()
    })
  }

  htmlToJson(data, element: string): any[] {
    const htmlDoc = new DOMParser().parseFromString(data, "text/html")
    const table: any = htmlDoc.querySelectorAll(element)
    const rows = []
    for (let i = 0; i < table.length; i++) {
      const row = []
      for (let t = 0; t < table[i].childNodes.length; t++) {
        row.push(table[i].childNodes[t].innerText)
      }
      rows.push(row)
    }
    rows.shift()
    return rows
  }

  csvToJson(data): any[] {
    const rows = []
    const lines: any[] = data.split('\n')
    lines.shift()
    lines.forEach(line => {
      if (line.length > 0) {
        const newRow = []
        line.split(';').forEach(element => {
          newRow.push(isNaN(element) ? element : +element)
        })
        rows.push(newRow)
      }
    })
    return rows
  }
}
