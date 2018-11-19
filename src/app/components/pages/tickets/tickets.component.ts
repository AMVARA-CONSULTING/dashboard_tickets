import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Ticket } from '@other/interfaces';
import { ConfigService } from '@services/config.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs';

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
    private ac: ActivatedRoute
  ) {
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
        this.interval = interval(100).subscribe(_ => {
          if (!this.data.loadingTickets) {
            this.interval.unsubscribe()
            this.rollup()
          }
        })
      } else {
        this.rollup()
      }
    })
  }

  interval: Subscription

  rollup(): void {
    const ticketRows = this.data.tickets.slice(0, 30)
    console.log(ticketRows)
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
    this.tickets = tickets
  }

  type: string
  filter: string

  ngOnInit() {
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  tickets: Ticket[] = []

  displayedColumns = ['id', 'category', 'status', 'priority', 'subject', 'asignee', 'updated', 'target', 'time', 'done', 'options']

  getID(el: Ticket, i: number) {
    return el.id
  }

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