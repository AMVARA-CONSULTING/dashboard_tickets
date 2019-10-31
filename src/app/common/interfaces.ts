export interface Config {
  language: string;
  readonly version: string;
  readonly delay: number;
  readonly reports: Scenarios;
  readonly contacts: any[];
  readonly appTitle: string;
  readonly languageCodes: any;
  readonly delayRequests: number,
  readonly changelog: any[];
  readonly copyright: string;
  readonly columns: any,
  readonly cognosRepository: string,
  readonly scenario: string,
  readonly portalLink: { dev: string, prod: string }
  readonly displayedColumnsDefault: string[],
  readonly displayedColumnsOrder: string[],
  readonly ticketOptions: boolean,
  displayedColumns: string[],
  infiniteScroll: boolean;
  negativeBad: boolean | number;
  [propName: string]: any;
}

export interface Scenarios {
  readonly dev: Reports,
  readonly prod: Reports
}

export interface Reports {
  readonly barchart: ReportInfo,
  readonly tickets: ReportInfo,
  readonly overview_prio: ReportInfo,
  readonly overview_type: ReportInfo,
  readonly overview_status: ReportInfo,
  readonly overview_service: ReportInfo,
  readonly overview_silt: ReportInfo,
  readonly monthsSelector: string,
  readonly allMonths: string,
  readonly overview_count: ReportInfo,
  readonly monthShouldBeNumber: number[],
  readonly months: string[],
}

export interface ReportInfo {
  readonly id: string
  readonly selector: string
  readonly shouldBeNumber: number[]
  date?: string
}

export interface ContactInfo {
  name: string,
  description: string,
  telephone: string
}

export interface Ticket {
  id: number | string
  status: string
  priority: string | number
  assignee: string
  updated: string
  month_id: string,
  create_date: Date,
  modify_date: Date,
  type: string,
  description: string,
  external: string,
  classification: string,
  component: string,
  service_group: string,
  service: string,
  count: number,
  silt: number
}

export interface ClassificationGroup {
  name: string
  total: string
  percent: number
}

export type SAViewType = 'overview' | 'daily' | 'weekly' | 'monthly'

export interface SAPercents {
  rows: any[]
  today: number
  yesterday: number
  prev_week: number
  prev_month: number
  yesterday_up: string
  week_up: string
  month_up: string
}