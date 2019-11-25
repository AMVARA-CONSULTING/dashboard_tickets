import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as moment from 'moment';

declare const JKL, XML: any

@Injectable()
export class ReportsService {

  constructor(
    private http: HttpClient,
    private data: DataService,
    private config: ConfigService
  ) {
    this.corpintra = location.hostname.indexOf('corpintra.net') > -1
  }

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

  loadInitialReport(): Promise<void> {
    return new Promise(resolve => {
      (document.querySelector('.progress-value') as HTMLElement).style.width = '5%';
      this.config.completed.subscribe(_ => {
        forkJoin(
          this.getReportOverallData('barchart'),
          this.getReportOverallData('overview_prio'),
          this.getReportOverallData('overview_service'),
          this.getReportOverallData('overview_silt'),
          this.getReportOverallData('overview_status'),
          this.getReportOverallData('overview_type'),
          this.getReportOverallData('overview_count'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].allMonths, this.config.config.reports[this.config.config.scenario].monthsSelector, 'Mobile_Tickets_List.csv'),
          this.getReportOverallData('system'),
        )
          .subscribe(data => {
            this.data.chart = data[0]
            this.data.priority = data[1]
            this.data.service = data[2]
            this.data.silt = data[3]
            this.data.status = data[4]
            this.data.type = data[5]
            this.data.overall = data[6]
            this.data.allTickets = data[7]
            if (this.config.config.excludeDatesFuture) {
              this.data.allTickets = this.data.allTickets.filter(row => !moment(row[2], ['DD.MM.YYYY HH:mm', 'MMM D, YYYY H:mm:ss A']).isAfter())
            }
            this.data.system = data[8]
            if (this.config.config.excludeDatesFuture) {
              this.data.system = this.data.system.filter(row => !moment(row[1], 'MM/DD/YYYY').isAfter())
            }
            const actualMonth = this.data.overall.map(t => t[0])[0]
            this.data.month = new BehaviorSubject<{ month: string, index: number }>({ month: actualMonth, index: 0 })
            resolve()
          })
      })
    })
  }

  getReportData(ReportID: string, selector: string, fallback: string): Observable<any[]> {
    return new Observable(observer => {
      if (this.corpintra) {
        this.http.get(`/analytics/bi/v1/objects/${ReportID}/versions`).subscribe((json: any) => {
          const nextLink = json.data[0]._meta.links.content.url
          this.http.get(nextLink, { responseType: 'text' }).subscribe(data => {
            const rows = this.htmlToJson(data, selector)
            observer.next(rows)
            observer.complete()
          }, err => {
            observer.error('Couldn\'t fetch json from report.')
            console.log(err)
            observer.complete()
          })
        })
      } else {
        this.http.get('assets/reports/' + fallback, { responseType: 'text' })
          .pipe(
            map(data => this.csvToJson(data))
          )
          .subscribe(data => {
            observer.next(data)
            observer.complete()
          })
      }
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
