import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import memo from 'memo-decorator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Ticket } from '@other/interfaces';
import { MatSort, Sort } from '@angular/material/sort';
import { DateParsePipe } from '@pipes/date-parse.pipe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'cism-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [
    DateParsePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    public data: DataService,
    public config: ConfigService,
    private bottomSheet: MatBottomSheet,
    private ac: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private parsePipe: DateParsePipe
  ) {
    this.ticketsLength = new BehaviorSubject<number>(0)
    this.ac.paramMap.subscribe(params => {
      this.data.loading.next(true)
      this.type = params.get('type')
      this.filter = params.get('filter')
      if (!this.running) this.rollup()
    })
    this.monthSubscription = this.data.month.subscribe(_ => {
      this.data.loading.next(true)
      if (!this.running) this.rollup()
    })
  }

  running: boolean = false

  ngAfterViewInit() {
    setTimeout(_ => this.ref.detectChanges())
  }

  monthSubscription: Subscription
  hideClosedSubscription: Subscription

  displayedColumns_copy: string[] = []

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
    if (this.hideClosedSubscription) this.hideClosedSubscription.unsubscribe()
  }

  changeViewClick() {
    this.displayedColumns_copy = this.config.config.displayedColumns
    this.changeView = !this.changeView
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
    let allColumns = this.config.config.displayedColumnsOrder
    allColumns = allColumns.filter(column => this.displayedColumns_copy.indexOf(column) > -1)
    localStorage.setItem('displayedColumns', JSON.stringify(allColumns))
    if (this.config.config.ticketOptions) allColumns.push('options')
    this.config.config.displayedColumns = allColumns
    this.fixedWidth = allColumns.length > 5
    this.changeView = false
    this.tickets.filter = this.hideClosed ? 'Closed' : ''
    this.data.hideClosed = this.tickets.filter === 'Closed'
    localStorage.setItem('hideClosed', this.hideClosed ? 'yes' : 'no')
    setTimeout(_ => this.ref.detectChanges())
  }

  saveHideClosed(e: MatCheckboxChange) {
    this.hideClosed = e.checked
  }

  pageSizeOptions: number[] = [10, 25, 50, 100]

  page_size: number = 20
  page_number: number = 1

  @memo((...args: any[]): string => JSON.stringify(args))
  getID(el: any, i: number): number {
    return el.id
  }

  rollup(): void {
    this.data.loading.next(true)
    this.running = true
    const month = this.data.month.getValue()
    const monthIndex = month.index
    if (!Array.isArray(this.data.tickets[monthIndex])) {
      this.data.tickets[monthIndex] = this.data.allTickets.filter(ticket => ticket[this.config.config.columns.month_id] == month.month)
    }
    this.rollupPart2(this.data.tickets[monthIndex])
  }

  rollupPart2(ticketRows): void {
    if (this.type !== null && this.filter !== null) {
      if (!this.config.config.columns.hasOwnProperty(this.type)) {
        this.data.loading.next(true)
        this.router.navigate(['/'])
        return
      }
      ticketRows = ticketRows.filter(row => row[this.config.config.columns[this.type]] == this.filter)
    }
    const length = ticketRows.length
    let newTickets: Ticket[] = []
    for (let i = 0; i < length; i++) {
      let newTicket = {}
      for (let prop in this.config.config.columns) {
        switch (prop) {
          case "create_date":
          case "modify_date":
            newTicket[prop] = this.parsePipe.transform(ticketRows[i][this.config.config.columns[prop]])
            break
          default:
            newTicket[prop] = ticketRows[i][this.config.config.columns[prop]]
        }
      }
      newTickets.push(newTicket as any)
    }
    this.tickets.data = newTickets
    this.ticketsLength.next(newTickets.length)
    this.percent = parseInt((ticketRows.length * 100 / length).toString(), 10)
    this.data.loading.next(false)
    this.running = false
  }

  type: string
  filter: string

  column_sorted: string = 'id'
  direction_sorted: string = ''

  @ViewChild('table', { static: true }) table: MatTable<any>

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSort, { static: true }) sort: MatSort

  ngOnInit() {
    this.fixedWidth = this.config.config.displayedColumns.length > 5
    this.tickets.paginator = this.paginator
    this.tickets.sort = this.sort
    this.tickets.filterPredicate = (data: any, filter: string) => {
      return data.status != filter
    }
    this.tickets.filter = this.data.hideClosed ? 'Closed' : ''
    this.column_active = localStorage.getItem('column_active') || 'id'
    this.column_direction = localStorage.getItem('column_direction') || 'desc'
    setTimeout(_ => this.ref.markForCheck())
  }

  hideClosed: boolean = true

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  changeView: boolean = false

  column_active: string = 'id'
  column_direction: string = 'desc'

  saveSort(e: Sort) {
    this.column_active = e.active
    this.column_direction = e.direction
    localStorage.setItem('column_active', e.active)
    localStorage.setItem('column_direction', e.direction)
  }

  tickets = new MatTableDataSource<Ticket>([])

  goSolve(ticket: any): void {
    let ref = this.bottomSheet.open(SolveTicket, {
      panelClass: 'solve-ticket-panel',
      data: ticket
    })
    ref.instance.success.subscribe(success => {
      if (success.success) {
        const id = success.id
        const tickets = this.tickets.data
        const index = tickets.findIndex(row => row[this.config.config.columns.id] == id)
        tickets[index][this.config.config.columns.status] = 'Solved'
        this.tickets.data = tickets
        this.ticketsLength.next(tickets.length)
        this.ref.detectChanges()
      }
    })
  }

  removeItem(ticket): void {
    this.tickets.data = this.tickets.data.filter(ticketB => ticketB[this.config.config.columns.id] != ticket[this.config.config.columns.id])
    this.ticketsLength.next(this.tickets.data.length)
  }

  ticketsLength: BehaviorSubject<number>

}

@Component({
  selector: 'solve-ticket',
  templateUrl: 'solve.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolveTicket {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public ticket: any,
    private bottomSheetRef: MatBottomSheetRef<SolveTicket>,
    public config: ConfigService
  ) {
    this.success = new Subject<{ id: number, success: boolean, solveText: string }>()
  }

  solveText = new BehaviorSubject<string>('')

  close(): void {
    this.success.next({ id: 0, success: false, solveText: '' })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  solve(): void {
    this.success.next({ id: this.ticket[this.config.config.columns.id], success: true, solveText: this.solveText.getValue() })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  success: Subject<{ id: number, success: boolean, solveText: string }>

}