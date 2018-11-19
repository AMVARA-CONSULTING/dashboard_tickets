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
      (document.querySelector('.progress-value') as HTMLElement).style.width = '5%';
      const obs = this.getInitialReport().subscribe(
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
          (document.querySelector('.progress-value') as HTMLElement).style.width = '30%';
          resolve()
          obs.unsubscribe();
        },
        err => obs.unsubscribe()
      )
    })
  }

  loadTickets(): Promise<void> {
    return new Promise(resolve => {
      const obs = this.getTickets().subscribe(
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
          this.data.tickets = rows
          resolve()
          obs.unsubscribe()
        },
        err => obs.unsubscribe()
      )
    })
  }

  getTickets(): Observable<any> {
    return this.http.get('assets/reports/Mobile_Ticket_List.csv', {
      responseType: 'text'
    })
  }

  getInitialReport(): Observable<any> {
    (document.querySelector('.progress-value') as HTMLElement).style.width = '10%';
    return this.http.get('assets/reports/Mobile_Overview.csv', {
      responseType: 'text'
    })
  }
}
