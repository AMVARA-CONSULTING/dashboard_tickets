import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Ticket } from '@other/interfaces';
import { ConfigService } from '@services/config.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { BehaviorSubject } from 'rxjs';
import { ToolsService } from 'app/tools.service';
import { PageEvent } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as moment from 'moment';

@Component({
  selector: 'cism-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {

  constructor(
    public data: DataService,
    public config: ConfigService,
    private bottomSheet: MatBottomSheet,
    private ac: ActivatedRoute,
    private router: Router,
    private tools: ToolsService
  ) {
    this.tickets = new BehaviorSubject<any[]>([])
    const types = data.initialRows.reduce((r, a) => {
      r[a[0]] = r[a[0]] || []
      r[a[0]].push(a)
      return r
    }, {})
    this.byPriority = types['BYPRIORITY']
    this.byType = types['BYTYPE']
    this.byApplication = types['BYSERVICE']
    this.byStatus = types['BYSTATUS']
    this.ac.paramMap.subscribe(params => {
      this.type = params.get('type')
      this.filter = params.get('filter')
      if (this.data.loadingTickets) {
        const intervalB = interval(100).subscribe(_ => {
          if (!this.data.loadingTickets) {
            intervalB.unsubscribe()
            this.data.month.subscribe(_ => this.rollup())
          }
        })
      } else {
        this.data.month.subscribe(_ => this.rollup())
      }
    })
  }

  displayedColumns_copy: string[] = []

  changeViewClick() {
    this.displayedColumns_copy = this.config.config.displayedColumns
    this.changeView = true
  }

  isChecked(column: string): boolean {
    return this.displayedColumns_copy.indexOf(column) > -1
  }

  checkHandler(column: string, e: MatCheckboxChange) {
    if (e.checked) {
      this.displayedColumns_copy.push(column)
    } else {
      this.displayedColumns_copy = this.displayedColumns_copy.filter(columnB => columnB != column)
    }
  }

  fixedWidth: boolean = true
  percent: number = 0

  saveColumns() {
    let allColumns = this.config.displayedColumnsDefault
    allColumns = allColumns.filter(column => this.displayedColumns_copy.indexOf(column) > -1)
    localStorage.setItem('displayedColumns', JSON.stringify(allColumns))
    this.config.config.displayedColumns = allColumns
    this.fixedWidth = allColumns.length > 5
    this.changeView = false
  }

  pageSizeOptions: number[] = [10, 25, 50, 100]

  page_size: number = 20
  page_number: number = 1

  pageChange(event: PageEvent) {
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }

  getID(el: Ticket, i: number): number {
    return el.id
  }

  rollup(): void {
    let ticketRows = this.data.tickets
    const month = this.data.month.getValue()
    ticketRows = ticketRows.filter(row => moment(row[2], 'DD.MM.YYYY HH:mm').format('YYYY[M]MM') == month)
    const totalOfMonth = ticketRows.length
    if (this.type !== null && this.filter !== null) {
      if (!this.config.config.columns.hasOwnProperty(this.type)) {
        this.router.navigate(['/'])
        return
      }
      ticketRows = ticketRows.filter(row => row[this.config.config.columns[this.type]] == this.filter)
    }
    if (ticketRows.length === 0) return
    const length = ticketRows.length
    const tickets: Ticket[] = []
    for (let i = 0; i < length; i++) {
      let priority = ''
      switch (+ticketRows[i][this.config.config.columns.priority]) {
        case 1:
          priority = 'Normal'
          break
        case 2:
          priority = 'High'
          break
        case 3:
          priority = 'Urgent'
          break
        case 4:
          priority = 'Immediate'
          break
        default:
      }
      tickets.push({
        id: ticketRows[i][this.config.config.columns.id],
        assignee: ticketRows[i][this.config.config.columns.external],
        category: '-',
        done: 30,
        priority: priority,
        status: ticketRows[i][this.config.config.columns.status],
        subject: ticketRows[i][this.config.config.columns.description],
        target: '-',
        time: 5,
        updated: ticketRows[i][this.config.config.columns.modify_date]
      })
    }
    this.tickets.next(tickets)
    this.percent = parseInt((ticketRows.length * 100 / totalOfMonth).toString(), 10)
  }

  type: string
  filter: string

  ngOnInit() {
    this.fixedWidth = this.config.config.displayedColumns.length > 5
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  changeView: boolean = false

  tickets: BehaviorSubject<any[]>

  goSolve(ticket: Ticket): void {
    this.bottomSheet.open(SolveTicket, {
      panelClass: 'solve-ticket-panel',
      data: ticket
    })
  }

}

@Component({
  selector: 'solve-ticket',
  templateUrl: 'solve.html',
})
export class SolveTicket {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public ticket: Ticket,
    private bottomSheetRef: MatBottomSheetRef<SolveTicket>
  ) {
    console.log(ticket)
  }

  close() {
    this.bottomSheetRef.dismiss()
  }

}