import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { ConfigService } from './config.service';
import { ToolsService } from 'app/tools.service';
import { map, delay } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import memo from 'memo-decorator';
import * as moment from 'moment';

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

  @memo()
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
          this.getReportData(this.config.config.reports[this.config.config.scenario].barchart.id, this.config.config.reports[this.config.config.scenario].barchart.selector, 'Mobile_Tickets_Chart.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_prio.id, this.config.config.reports[this.config.config.scenario].overview_prio.selector, 'Mobile_Tickets_Priority.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_service.id, this.config.config.reports[this.config.config.scenario].overview_service.selector, 'Mobile_Tickets_Service.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_silt.id, this.config.config.reports[this.config.config.scenario].overview_silt.selector, 'Mobile_Tickets_Silt.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_status.id, this.config.config.reports[this.config.config.scenario].overview_status.selector, 'Mobile_Tickets_Status.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_type.id, this.config.config.reports[this.config.config.scenario].overview_type.selector, 'Mobile_Tickets_Type.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].overview_count.id, this.config.config.reports[this.config.config.scenario].overview_count.selector, 'Mobile_Tickets_Overall.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].allMonths, this.config.config.reports[this.config.config.scenario].monthsSelector, 'Mobile_Tickets_List.csv'),
          this.getReportData(this.config.config.reports[this.config.config.scenario].system, this.config.config.reports[this.config.config.scenario].system, 'System.csv')
        )
          .pipe(delay(this.config.config.delayRequests))
          .subscribe(data => {
            this.data.chart = data[0]
            this.tools.log('API','Chart Data:', data[0].length)
            this.data.priority = data[1]
            this.tools.log('API','Priority Data:', data[1].length)
            this.data.service = data[2]
            this.tools.log('API','Service Data:', data[2].length)
            this.data.silt = data[3]
            this.tools.log('API','Silt Data:', data[3].length)
            this.data.status = data[4]
            this.tools.log('API','Status Data:', data[4].length)
            this.data.type = data[5]
            this.tools.log('API','Type Data:', data[5].length)
            this.data.overall = data[6]
            this.tools.log('API','Overall Data:', data[6].length)
            this.data.allTickets = data[7]
            if (this.config.config.excludeDatesFuture) {
              this.data.allTickets = this.data.allTickets.filter(row => !moment(row[2]).isAfter())
            }
            this.tools.log('API','All Tickets:', data[7].length)
            this.data.system = data[8]
            if (this.config.config.excludeDatesFuture) {
              this.data.system = this.data.system.filter(row => !moment(row[1], 'MM/DD/YYYY').isAfter())
            }
            this.tools.log('API','System Availability:', data[8].length)
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
        this.http.get(this.config.config.cognosRepository[this.config.config.scenario] + '?b_action=cognosViewer&ui.action=view&ui.format=HTML&ui.object=XSSSTARTdefaultOutput(storeID(*22' + ReportID + '*22))XSSEND&ui.name=Mobile_Ticket_List&cv.header=false&ui.backURL=XSSSTART*2fibmcognos*2fcps4*2fportlets*2fcommon*2fclose.htmlXSSEND', { responseType: 'text' }).pipe(delay(this.config.config.delayRequests)).subscribe(data => {
          const dataUrl = this.getCognosIframe(data)
          this.http.get(dataUrl, { responseType: 'text' }).subscribe(data => {
            const rows = this.htmlToJson(data, selector, ReportID)
            if (rows.length > 0) {
              observer.next(rows)
              observer.complete()
            } else {
              this.tools.log('API', "Using local CSV file instead due to error in request", fallback)
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
            map(data => this.csvToJson(data)),
            delay(this.config.config.delayRequests)
          )
          .subscribe(data => {
            observer.next(data)
            observer.complete()
          })
      }
    })
  }

  @memo()
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

  @memo((...args: any[]): string => JSON.stringify(args))
  htmlToJson(data, element: string, ReportID: string): any[] {
    const htmlDoc = new DOMParser().parseFromString(data, "text/html")
    const table: any = htmlDoc.querySelectorAll(element)
    try {
      const dateTime = htmlDoc.querySelector('[lid=Page1] .tableRow:last-child .tableCell:first-child span').textContent
      const dateHour = htmlDoc.querySelector('[lid=Page1] .tableRow:last-child .tableCell:last-child span').textContent
      for (let prop in this.config.config.reports[this.config.config.scenario]) {
        if (this.config.config.reports[this.config.config.scenario][prop].id == ReportID) {
          this.config.config.reports[this.config.config.scenario][prop].date = dateTime + ' ' + dateHour
        }
      }
    } catch (err) {
      this.tools.log('ERROR','We couldn\'t find the run date of this report.')
    }
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

  @memo()
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
