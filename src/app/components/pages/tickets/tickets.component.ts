import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket, Month, Config } from '@other/interfaces';
import { MatSort, Sort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { ReportsService } from '@services/reports.service';
import { SubSink } from '@services/tools.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { UpdateConfig } from '@states/config.state';

@Component({
  selector: 'cism-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit, OnDestroy {

  constructor(
    public data: DataService,
    private bottomSheet: MatBottomSheet,
    private ac: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private _reports: ReportsService,
    private _store: Store
  ) {
    this.config = this._store.selectSnapshot<Config>(state => state.config)
  }

  subs = new SubSink()

  displayedColumns_copy: string[] = []

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  config: Config

  changeViewClick() {
    this.displayedColumns_copy = this.config.displayedColumns
    this.changeView.next(!this.changeView.getValue())
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

  fixedWidth = new BehaviorSubject<boolean>(true)

  saveColumns() {
    let allColumns = this.config.displayedColumnsOrder
    allColumns = allColumns.filter(column => this.displayedColumns_copy.indexOf(column) > -1)
    localStorage.setItem('displayedColumns', JSON.stringify(allColumns))
    if (this.config.ticketOptions) allColumns.push('options')
    this._store.dispatch(new UpdateConfig({ displayedColumns: allColumns }))
    this.fixedWidth.next(allColumns.length > 5)
    this.changeView.next(false)
    localStorage.setItem('hideClosed', this.hideClosed ? 'yes' : 'no')
    setTimeout(_ => this.ref.detectChanges())
  }

  saveHideClosed(e: MatCheckboxChange) {
    this.hideClosed = e.checked
  }

  getID(el: any, i: number): number {
    return el.id
  }

  rollup(ticketRows, type, filter): void {
    if (type !== null && filter !== null) {
      if (!this.config.columns.hasOwnProperty(type)) {
        this.data.loading.next(true)
        this.router.navigate(['/'])
        return
      }
      ticketRows = ticketRows.filter(row => row[this.config.columns[type]] == filter)
    }
    const newTickets = ticketRows.map(row => {
      let newTicket = {}
      for (let prop in this.config.columns) {
        newTicket[prop] = row[this.config.columns[prop]]
      }
      return newTicket
    })
    this.newTickets(newTickets)
    this.data.loading.next(false)
    this.ref.detectChanges()
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSort, { static: true }) sort: MatSort

  ngOnInit() {
    this.data.loading.next(true)
    this.subs.add(
      combineLatest(this.data.month, this.ac.paramMap)
        .pipe(
          distinctUntilChanged()
        )
        .subscribe(([month, params]: [Month, ParamMap]) => {
        const type = params.get('type')
        const filter = params.get('filter')
        this.data.loading.next(true)
        const monthIndex = month.index
        if (!Array.isArray(this.data.tickets[monthIndex])) {
          this.subs.add(
            this._reports.getReportData(
              this.config.reports[this.config.scenario].months[monthIndex],
              this.config.reports[this.config.scenario].monthsSelector,
              'Mobile_Tickets_List.csv'
            ).subscribe(data => {
              this.data.tickets[monthIndex] = data
              this.rollup(this.data.tickets[monthIndex], type, filter)
            })
          )
        } else {
          this.rollup(this.data.tickets[monthIndex], type, filter)
        }
      })
    )
    this.fixedWidth.next(this.config.displayedColumns.length > 5)
    this.column_active = localStorage.getItem('column_active') || 'id'
    this.column_direction = localStorage.getItem('column_direction') || 'desc'
    setTimeout(_ => this.ref.markForCheck())
  }

  newTickets(tickets: Ticket[]) {
    const source = new MatTableDataSource<Ticket>(tickets)
    source.paginator = this.paginator
    source.sort = this.sort
    source.filterPredicate = (data: any, filter: string) => {
      return data.status != filter
    }
    source.filter = this.hideClosed ? 'Closed' : ''
    this.ticketsLength.next(tickets.length)
    this.tickets.next(source)
  }

  hideClosed: boolean = true

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  changeView = new BehaviorSubject<boolean>(false)

  column_active: string = 'id'
  column_direction: string = 'desc'

  saveSort(e: Sort) {
    this.column_active = e.active
    this.column_direction = e.direction
    localStorage.setItem('column_active', e.active)
    localStorage.setItem('column_direction', e.direction)
  }

  tickets = new BehaviorSubject<MatTableDataSource<Ticket>>(new MatTableDataSource<Ticket>([]))

  goSolve(ticket: any): void {
    let ref = this.bottomSheet.open(SolveTicket, {
      panelClass: 'solve-ticket-panel',
      data: ticket
    })
    this.subs.add(
      ref.instance.success.subscribe(success => {
        if (success.success) {
          const id = success.id
          const tickets = this.tickets.getValue().data
          const index = tickets.findIndex(row => row[this.config.columns.id] == id)
          tickets[index][this.config.columns.status] = 'Solved'
          this.newTickets(tickets)
        }
      })
    )
  }

  removeItem(ticket): void {
    const tickets = this.tickets.getValue().data.filter(ticketB => ticketB[this.config.columns.id] != ticket[this.config.columns.id])
    this.newTickets(tickets)
  }

  ticketsLength = new BehaviorSubject<number>(0)

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
    private _store: Store
  ) {
    this.config = this._store.selectSnapshot<Config>(store => store.config)
    this.success = new Subject<{ id: number, success: boolean, solveText: string }>()
  }

  config: Config

  solveText = new BehaviorSubject<string>('')

  close(): void {
    this.success.next({ id: 0, success: false, solveText: '' })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  solve(): void {
    this.success.next({ id: this.ticket[this.config.columns.id], success: true, solveText: this.solveText.getValue() })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  success: Subject<{ id: number, success: boolean, solveText: string }>

}