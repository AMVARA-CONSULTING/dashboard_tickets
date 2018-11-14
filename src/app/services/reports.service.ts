import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';

@Injectable()
export class ReportsService {

  constructor(
    private http: HttpClient,
    private data: DataService
  ) { }

  loadInitialReport(): Promise<void> {
    return new Promise(resolve => {
      const obs = this.getInitialReport().subscribe(
        res => {
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
          rows.pop()
          this.data.initialRows = rows.filter(row => row[0] != 'Report Target')
          console.log(this.data.initialRows)
          resolve()
          obs.unsubscribe()
        },
        err => obs.unsubscribe()
      )
    })
  }

  getInitialReport(): Observable<any> {
    return this.http.get('assets/reports/Mobile_Overview.csv', {
      responseType: 'text'
    })
  }
}
