import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '@services/data.service';
import { Ticket } from '@other/interfaces';
import { ConfigService } from '@services/config.service';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'cism-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(
    public data: DataService,
    public config: ConfigService,
    private bottomSheet: MatBottomSheet
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
  }

  ngOnInit() {
  }

  rippleColor: string = 'rgba(255,255,255,.08)'

  byPriority = []
  byType = []
  byApplication = []
  byStatus = []

  tickets: Ticket[] = [
    { id: 1, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 2, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 3, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 4, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 5, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
    { id: 6, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 7, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 8, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 9, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 10, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
    { id: 11, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 12, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 13, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 14, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 15, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
    { id: 16, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 17, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 18, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 19, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 20, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
    { id: 21, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 22, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 23, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 24, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 25, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
    { id: 26, category: '', status: 'New', priority: 'Normal', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 5, done: 70 },
    { id: 27, category: '', status: 'Solved', priority: 'Urgent', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 20, done: 10 },
    { id: 28, category: '', status: 'In progress', priority: 'Immediate', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 37, done: 20 },
    { id: 29, category: '', status: 'New', priority: 'Low', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 2, done: 90 },
    { id: 30, category: '', status: 'Solved', priority: 'High', subject: 'Name Ticket', assignee: 'AlexBarba', updated: '10/23/2018 12:00PM', target: '', time: 34, done: 40 },
  ]

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