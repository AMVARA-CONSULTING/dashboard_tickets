import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { ConfigService } from './config.service';
import { ToolsService } from 'app/tools.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

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
      this.config.completed.subscribe(() => {
        forkJoin(
          this.getReportData(this.config.config.reports.dev.barchart.id, this.config.config.reports.dev.barchart.selector, 'Mobile_Tickets_Chart.csv'),
          this.getReportData(this.config.config.reports.dev.overview_prio.id, this.config.config.reports.dev.overview_prio.selector, 'Mobile_Tickets_Priority.csv'),
          this.getReportData(this.config.config.reports.dev.overview_service.id, this.config.config.reports.dev.overview_service.selector, 'Mobile_Tickets_Service.csv'),
          this.getReportData(this.config.config.reports.dev.overview_silt.id, this.config.config.reports.dev.overview_silt.selector, 'Mobile_Tickets_Silt.csv'),
          this.getReportData(this.config.config.reports.dev.overview_status.id, this.config.config.reports.dev.overview_status.selector, 'Mobile_Tickets_Status.csv'),
          this.getReportData(this.config.config.reports.dev.overview_type.id, this.config.config.reports.dev.overview_type.selector, 'Mobile_Tickets_Type.csv')
        ).subscribe(data => {
          this.data.chart = data[0]
          this.data.priority = data[1]
          this.data.service = data[2]
          this.data.silt = data[3]
          this.data.status = data[4]
          this.data.type = data[5]
          console.log('AMVARA',data)
          resolve()
        })
      })
    })
  }

  getReportData(ReportID: string, selector: string, fallback: string): Promise<any> {
    return new Promise(resolve => {
      if (this.corpintra) {
        this.http.get(this.config.config.cognosRepository[this.config.config.scenario]+'?b_action=cognosViewer&ui.action=view&ui.format=HTML&ui.object=XSSSTARTdefaultOutput(storeID(*'+ReportID+'*22))XSSEND&ui.name=Mobile_Ticket_List&cv.header=false&ui.backURL=XSSSTART*2fibmcognos*2fcps4*2fportlets*2fcommon*2fclose.htmlXSSEND', { responseType: 'text'}).subscribe(data => {
          const htmlData = this.htmlToJson(data, selector)
          resolve(htmlData)
        })
      } else {
        this.http.get('assets/reports/'+fallback, { responseType: 'text' })
        .pipe(
          map(data => this.csvToJson(data))
        )
        .subscribe(data => resolve(data))
      }
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

  csvToJson(data): any[] {
    const rows = []
    const lines: any[] = data.split('\n')
    lines.shift()
    lines.forEach(line => {
      const newRow = []
      line.split(';').forEach(element => {
        newRow.push(isNaN(element) ? element : +element)
      })
      rows.push(newRow)
    })
    return rows
  }
}
