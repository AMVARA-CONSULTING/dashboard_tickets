export interface Config {
  language: string;
  readonly version: string;
  readonly delay: number;
  readonly reports: Scenarios;
  readonly contacts: any[];
  readonly appTitle: string;
  readonly languageCodes: any;
  readonly heartbeat: number
  readonly delayRequests: number,
  readonly changelog: any[];
  readonly copyright: string;
  readonly columns: any,
  readonly cognosRepository: string,
  readonly scenario: string,
  readonly system: SystemConfig,
  readonly excludeDatesFuture: boolean,
  readonly portalLink: { dev: string, prod: string }
  readonly displayedColumnsDefault: string[],
  readonly displayedColumnsOrder: string[],
  readonly ticketOptions: boolean,
  readonly fullUrl: string
  readonly portalFolder: string
  readonly corpintraMode: boolean
  displayedColumns: string[],
  infiniteScroll: boolean;
  negativeBad: boolean | number;
  [propName: string]: any;
}

export interface SystemConfig {
  readonly unitsPast: number,
  readonly titles: Titles
  readonly S1: SystemS1Config
  readonly S2: SystemS2Config
  readonly S3: SystemS3Config
  readonly S4: SystemS4Config
  readonly S5: SystemS5Config
}

export interface SystemS1Config {
  readonly formatDate: string
}

export interface SystemS2Config {
  readonly formatDate: string
}

export interface SystemS3Config {
  readonly formatDate: string
}

export interface SystemS4Config {
  readonly formatDate: string
}

export interface SystemS5Config {
  readonly formatDate: string
}

export interface Titles {
  readonly S1: string
  readonly S2: string
  readonly S3: string
  readonly S4: string
  readonly S5: string
}

export interface SystemTitleClick {
  readonly titles: string[]
  readonly nameClicked: string
  readonly indexClicked: number
}

export interface Month {
  month: string
  index: number
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

export interface KeyPair {
  name: string
  value: any
}