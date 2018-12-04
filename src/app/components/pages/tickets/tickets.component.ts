import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ConfigService } from '@services/config.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { ToolsService } from 'app/tools.service';
import { PageEvent } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ReportsService } from '@services/reports.service';
import memo from 'memo-decorator';

@Component({
  selector: 'cism-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    public data: DataService,
    public config: ConfigService,
    private bottomSheet: MatBottomSheet,
    private ac: ActivatedRoute,
    private router: Router,
    private tools: ToolsService,
    private ref: ChangeDetectorRef,
    private reports: ReportsService
  ) {
    this.tickets = new BehaviorSubject<any[]>([])
    this.hideClosed = this.data.hideClosed
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

  displayedColumns_copy: string[] = []

  ngOnDestroy() {
    if (this.monthSubscription) this.monthSubscription.unsubscribe()
  }

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
    this.data.hideClosed = this.hideClosed
    localStorage.setItem('hideClosed', this.hideClosed ? 'yes' : 'no')
  }

  saveHideClosed(e: MatCheckboxChange) {
    this.hideClosed = e.checked
  }

  pageSizeOptions: number[] = [10, 25, 50, 100]

  page_size: number = 20
  page_number: number = 1

  pageChange(event: PageEvent) {
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }

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
      this.reports.getReportData(this.config.config.reports[this.config.config.scenario].months[monthIndex], this.config.config.reports[this.config.config.scenario].monthsSelector, 'Mobile_Tickets_List.csv')
        .subscribe(data => {
          this.data.tickets[monthIndex] = [].concat(data)
          this.rollupPart2(this.data.tickets[monthIndex])
        })
    } else {
      this.rollupPart2(this.data.tickets[monthIndex])
    }
  }

  rollupPart2(ticketRows): void {
    const month = this.data.month.getValue()
    const length = ticketRows.length
    if (this.type !== null && this.filter !== null) {
      if (!this.config.config.columns.hasOwnProperty(this.type)) {
        this.data.loading.next(true)
        this.router.navigate(['/'])
        return
      }
      ticketRows = ticketRows.filter(row => row[this.config.config.columns[this.type]] == this.filter)
    }
    this.tickets.next(ticketRows)
    console.log("AMVARA - Next Tickets:", ticketRows.length)
    this.percent = parseInt((ticketRows.length * 100 / length).toString(), 10)
    this.data.loading.next(false)
    this.running = false
  }

  type: string
  filter: string

  ngOnInit() {
    this.fixedWidth = this.config.config.displayedColumns.length > 5
  }

  hideClosed: boolean = true

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  changeView: boolean = false

  tickets: BehaviorSubject<any[]>

  goSolve(ticket: any): void {
    let ref = this.bottomSheet.open(SolveTicket, {
      panelClass: 'solve-ticket-panel',
      data: ticket
    })
    ref.instance.success.subscribe(success => {
      if (success.success) {
        const text = success.solveText
        const id = success.id
        const tickets = this.tickets.getValue()
        const index = tickets.findIndex(row => row[this.config.config.columns.id] == id)
        tickets[index][this.config.config.columns.status] = 'Solved'
        console.log(tickets[index])
        this.tickets.next([].concat(tickets))
        this.ref.detectChanges()
      }
    })
  }

  removeItem(ticket): void {
    this.tickets.next(this.tickets.getValue().filter(ticketB => ticketB[this.config.config.columns.id] != ticket[this.config.config.columns.id]))
  }

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

  solveText: string = ''

  close(): void {
    this.success.next({ id: 0, success: false, solveText: '' })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  solve(): void {
    this.success.next({ id: this.ticket[this.config.config.columns.id], success: true, solveText: this.solveText })
    this.success.complete()
    this.bottomSheetRef.dismiss()
  }

  success: Subject<{ id: number, success: boolean, solveText: string }>

}