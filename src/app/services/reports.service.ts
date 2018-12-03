import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { ConfigService } from './config.service';
import { ToolsService } from 'app/tools.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

declare const JKL, XML: any

@Injectable()
export class ReportsService {

  constructor(
    private http: HttpClient,
    private data: DataService,
    private config: ConfigService,
    private tools: ToolsService
  ) {
    this.corpintra = location.hostname.indexOf('corpintra.net') > -1
  }

  corpintra: boolean = false

  transcode(data) {
    const xotree = new XML.ObjTree()
    const dumper = new JKL.Dumper()
    return JSON.parse(dumper.dump(xotree.parseXML(data)))
  }

  loadInitialReport(): Promise<void> {
    return new Promise(resolve => {
      (document.querySelector('.progress-value') as HTMLElement).style.width = '5%';
      this.config.completed.subscribe(_ => {
        forkJoin(
          this.getReportData(this.config.config.reports.dev.barchart.id, this.config.config.reports.dev.barchart.selector, 'Mobile_Tickets_Chart.csv'),
          this.getReportData(this.config.config.reports.dev.overview_prio.id, this.config.config.reports.dev.overview_prio.selector, 'Mobile_Tickets_Priority.csv'),
          this.getReportData(this.config.config.reports.dev.overview_service.id, this.config.config.reports.dev.overview_service.selector, 'Mobile_Tickets_Service.csv'),
          this.getReportData(this.config.config.reports.dev.overview_silt.id, this.config.config.reports.dev.overview_silt.selector, 'Mobile_Tickets_Silt.csv'),
          this.getReportData(this.config.config.reports.dev.overview_status.id, this.config.config.reports.dev.overview_status.selector, 'Mobile_Tickets_Status.csv'),
          this.getReportData(this.config.config.reports.dev.overview_type.id, this.config.config.reports.dev.overview_type.selector, 'Mobile_Tickets_Type.csv'),
          this.getReportData(this.config.config.reports.dev.overview_count.id, this.config.config.reports.dev.overview_count.selector, 'Mobile_Tickets_Overall.csv')
        ).subscribe(data => {
          this.data.chart = data[0]
          console.log('AMVARA - Chart Data - ', data[0].length)
          this.data.priority = data[1]
          console.log('AMVARA - Priority Data - ', data[1].length)
          this.data.service = data[2]
          console.log('AMVARA - Service Data - ', data[2].length)
          this.data.silt = data[3]
          console.log('AMVARA - Silt Data - ', data[3].length)
          this.data.status = data[4]
          console.log('AMVARA - Status Data - ', data[4].length)
          this.data.type = data[5]
          console.log('AMVARA - Type Data - ', data[5].length)
          this.data.overall = data[6]
          console.log('AMVARA - Overall Data - ', data[6].length)
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
        this.http.get(this.config.config.cognosRepository[this.config.config.scenario] + '?b_action=cognosViewer&ui.action=view&ui.format=HTML&ui.object=XSSSTARTdefaultOutput(storeID(*22' + ReportID + '*22))XSSEND&ui.name=Mobile_Ticket_List&cv.header=false&ui.backURL=XSSSTART*2fibmcognos*2fcps4*2fportlets*2fcommon*2fclose.htmlXSSEND', { responseType: 'text' }).subscribe(data => {
          const dataUrl = this.getCognosIframe(data)
          this.http.get(dataUrl, { responseType: 'text' }).subscribe(data => {
            const rows = this.htmlToJson(data, selector)
            if (rows.length > 0) {
              observer.next(rows)
              observer.complete()
            } else {
              console.log("AMVARA - Using local CSV file instead due to error in request", fallback)
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

  getCognosIframe(html): string {
    const htmlDoc = new DOMParser().parseFromString(html, "text/html")
    try {
      const iframe = htmlDoc.querySelector('iframe')
      const link = iframe.getAttribute('src')
      return link.split('?')[0]
    } catch (err) { // IE Fix
      const regex = /(\/ibmcognos\/cgi-bin\/cognosisapi\.dll\/repository\/sid\/cm\/oid\/(.+)\/content)/g
      const matches = regex.exec(html)
      return matches[0]
    }
  }

  htmlToJson(data, element): any[] {
    const htmlDoc = new DOMParser().parseFromString(data, "text/html")
    const table = htmlDoc.querySelectorAll(element)
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
