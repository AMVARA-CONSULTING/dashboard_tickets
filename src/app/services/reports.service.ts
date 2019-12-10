import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Config } from '@other/interfaces';
import { ToolsService } from './tools.service';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { MatSnackBar } from '@angular/material/snack-bar';
import dayjs from 'dayjs';

declare const JKL, XML: any

@Injectable()
export class ReportsService {

  constructor(
    private http: HttpClient,
    private data: DataService,
    private config: ConfigService,
    private _tools: ToolsService,
    private _snack: MatSnackBar
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
    const keyData = this.config.config.reports[this.config.config.scenario][key]
    return this.getReportData( keyData.id, keyData.selector, keyData.fallback )
  }

  load(): Promise<void> {
    return new Promise(resolve => {
      this.data.disabledAnimations = this._tools.isIE();
      (document.querySelector('.progress-value') as HTMLElement).style.width = '35%';
      this.http.get('assets/config.json').subscribe(config => {
        (document.querySelector('.progress-value') as HTMLElement).style.width = '40%';
        this.config.config = config as Config;
        (document.querySelector('.progress-value') as HTMLElement).style.width = '45%';
        this.config.config.language = localStorage.getItem('lang') || this.config.config.language;
        if (!!localStorage.getItem('hideClosed')) this.data.hideClosed = localStorage.getItem('hideClosed') === 'yes';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '50%';
        this.config.displayedColumnsDefault = this.config.displayedColumnsDefault
        this.config.config.system.enable = localStorage.getItem('enableExperimentalFeatures') === 'yes' || false
        if (this.config.config.system.enable) {
          this._snack.open('CISM is running with Experimental Features enabled.', 'OK')
        }
        this.config.config.displayedColumns = JSON.parse(localStorage.getItem('displayedColumns')) || this.config.config.displayedColumnsDefault;
        if (this.config.config.ticketOptions) this.config.config.displayedColumns.push('options');
        (document.querySelector('.progress-value') as HTMLElement).style.transitionDuration = this.config.config.delay + 'ms';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '100%';
        this._tools.log('Config', this.config)
        this.login().then(_ => resolve())
      });
    });
  }

  login(): Promise<void> {
    return new Promise(resolve => {
      if (location.hostname.indexOf('corpintra.net') == -1 && !this.config.config.corpintraMode) {
        this.loadInitialReport().then(_ => resolve())
      } else {
        console.log("Sending XHR to /analytics/bi/v1/notifications")
        this.http.get(`${this.config.config.fullUrl}${this.config.config.portalFolder}v1/notifications`, { observe: 'response', responseType: 'text' })
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
              iframe.src = `${this.config.config.fullUrl}${this.config.config.portalFolder}?pathRef=.public_folders%2FIWM_BI%2FIWM_BI%2FAMVARA_triggerCISM&ui_appbar=false&ui_navbar=false&format=HTML&Download=false`
              document.body.appendChild(iframe)
              // AMVARA_triggerCISM sended login is done
              window.addEventListener('complete', () => {
                console.log("Login done, load CISM")
                localStorage.setItem('cookies', iframe.contentWindow.document.cookie)
                this.loadInitialReport().then(_ => resolve())
              })
            }
          )
      }
    })
  }

  loadInitialReport(): Promise<void> {
    return new Promise(resolve => {
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
      if (this.config.config.system.enable) {
        jobs.push(this.getReportData(this.config.config.reports[this.config.config.scenario].allMonths, this.config.config.reports[this.config.config.scenario].monthsSelector, 'Mobile_Tickets_List.csv'))
        jobs.push(this.getReportOverallData('system'))
      }
      forkJoin(...jobs).subscribe(data => {
        this.data.chart = data[0]
        this.data.priority = data[1]
        this.data.service = data[2]
        this.data.silt = data[3]
        this.data.status = data[4]
        this.data.type = data[5]
        this.data.overall = data[6]
        if (this.config.config.system.enable) {
          this.data.allTickets = data[7]
          if (this.config.config.excludeDatesFuture) {
            // @ts-ignore
            this.data.allTickets = this.data.allTickets.filter(row => !dayjs(row[2], 'DD.MM.YYYY HH:mm').isAfter())
          }
          this.data.system = data[8]
          if (this.config.config.excludeDatesFuture) {
            // @ts-ignore
            this.data.system = this.data.system.filter(row => !dayjs(row[1], 'MM/DD/YYYY').isAfter())
          }
        }
        this.data.availableMonths = this.data.overall.map(row => row[0]).reverse()
        const currentMonth = this.data.months.filter(month => this.data.availableMonths.indexOf(month) > -1)[0]
        const currentMonthIndex = this.data.months.findIndex(month => month == currentMonth)
        this.data.month = new BehaviorSubject<{ month: string, index: number }>({
          month: currentMonth,
          index: currentMonthIndex
        })
        resolve()
      })
    })
  }

  getReportData(ReportID: string, selector: string, fallback: string): Observable<any[]> {
    return new Observable(observer => {
      if (this.corpintra || this.config.config.corpintraMode) {
        this.http.get(`${this.config.config.fullUrl}${this.config.config.portalFolder}v1/objects/${ReportID}/versions`).pipe(
          map((json: any) => `${this.config.config.fullUrl}${json.data[0]._meta.links.outputs.url}`), // Get outputs url
          switchMap((link: string) => this.http.get(link)), // Return the outputs response json
          map((json: any) => `${this.config.config.fullUrl}${json.data[0]._meta.links.content.url}`), // Get the last saved output url
          switchMap((link: string) => this.http.get(link, { responseType: 'text' })), // Return the content response as HTML
          map((json: any) => this.htmlToJson(json, selector)) // Convert HTML to JSON
        ).subscribe((json: any) => {
            observer.next(json)
            observer.complete()
          }, err => {
            if (this.config.config.system.enable) {
              this.giveFallback(fallback, observer)
              console.log(`${ReportID} is running in fallback mode`)
            } else {
              observer.error('Couldn\'t fetch json from report.')
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
