import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { ConfigService } from './config.service';
import { ToolsService } from 'app/tools.service';

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
      this.getInitialReport().subscribe(
        res => {
          const rows = [];
          const lines = res.split('\n');
          (document.querySelector('.progress-value') as HTMLElement).style.width = '15%';
          lines.forEach(line => {
            const newRow = []
            line.split(';').forEach(element => {
              newRow.push(isNaN(element) ? element : +element)
            })
            rows.push(newRow)
          });
          (document.querySelector('.progress-value') as HTMLElement).style.width = '20%';
          rows.shift();
          rows.pop();
          (document.querySelector('.progress-value') as HTMLElement).style.width = '25%';
          this.data.initialRows = rows.filter(row => row[0] != 'Report Target');
          const length = this.data.initialRows.length;
          for (let i = 0; i < length; i++) {
            this.data.initialRows[i][3] = parseInt(this.data.initialRows[i][3].toString().replace('.', ''), 10)
          }
          (document.querySelector('.progress-value') as HTMLElement).style.width = '30%';
          resolve()
        }
      )
    })
  }

  loadTickets(): Promise<void> {
    return new Promise(resolve => {
      this.getTickets(this.config.config.reports.dev.tickets).subscribe(
        res => {
          resolve()
        }
      )
    })
  }

  getReportData(ReportID: string, format: string): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.config.config.cognosRepository[this.config.config.scenario]+'/atom/cm/id/'+ReportID+'?XSSSTARTfilter=content-version&fmt=HTML&version=latest&containingClass=query&HTXSSEND', { responseType: 'text'}).subscribe(data => {
        const xmlData = this.transcode(data)
        resolve(xmlData)
      })
    })
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

  reportDates = {
    tickets: 'x'
  }

    // Get Order Intake Data from Report (temporarily from JSON File)
  getTickets(ReportID: string): Observable<{ success: boolean, data?: any[], error?: string, more?: any }> {
    if (this.corpintra) {
      return new Observable(observer => {
        this.http.get('/internal/bi/v1/objects/' + ReportID + '/versions', { headers: { 'X-XSRF-TOKEN': this.tools.xsrf_token } }).subscribe((json: any) => {
          const nextLink = json.data[0]._meta.links.outputs.url
          this.http.get(nextLink, { headers: { 'X-XSRF-TOKEN': this.tools.xsrf_token } }).subscribe((json: any) => {
            const nextLink = json.data[0]._meta.links.content.url
            this.reportDates.tickets = json.data[0].modificationTime
            this.http.get(nextLink, { responseType: 'text', headers: { 'X-XSRF-TOKEN': this.tools.xsrf_token } }).subscribe(data => {
              const rows = this.htmlToJson(data, this.config.config.reports.dev.tickets.selector)
              rows.forEach((row, index, rows) => {
                this.config.config.reports.trucks.columns.orderIntake.shouldBeNumber.forEach(num => {
                  rows[index][num] = isNaN(rows[index][num]) ? 0 : parseFloat(rows[index][num])
                })
              })
              rows.shift()
              this.data.tickets = rows
              observer.next({ success: true, data: rows })
              observer.complete()
            }, err => {
              observer.next({ success: false, data: [], error: 'OI - Fail at getting report table data.', more: err })
              observer.complete()
            })
          }, err => {
            observer.next({ success: false, data: [], error: 'OI - Fail at getting last report versions.', more: err })
            observer.complete()
          })
        }, err => {
          observer.next({ success: false, data: [], error: 'OI - Fail at retrieving report info.', more: err })
          observer.complete()
        })
      })
    } else {
      return new Observable(observer => {
        this.http.get('/assets/reports/Mobile_Ticket_List.csv', { responseType: 'text' }).subscribe((res: any) => {
          const rows = []
          const lines = res.split('\n')
          lines.forEach(line => {
            const newRow = []
            line.split(';').forEach(element => {
              newRow.push(isNaN(element) ? element : +element)
            })
            rows.push(newRow)
          })
          rows.shift()
          this.data.tickets = rows
          observer.next({ success: true, data: res })
          observer.complete()
        })
      })
    }
  }

  getInitialReport(): Observable<any> {
    (document.querySelector('.progress-value') as HTMLElement).style.width = '10%';
    return this.http.get('assets/reports/Mobile_Overview.csv', {
      responseType: 'text'
    })
  }
}
