export interface Config {
  language: string;
  readonly version: string;
  readonly delay: number;
  readonly reports: Scenarios;
  readonly contacts: any[];
  readonly appTitle: string;
  readonly languageCodes: any;
  readonly changelog: any[];
  readonly copyright: string;
  readonly columns: any,
  readonly cognosRepository: string,
  readonly scenario: string,
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
  readonly overview_count: ReportInfo,
  readonly months: string[],
}

export interface ReportInfo {
  readonly id: string,
  readonly selector: string
}

export interface ContactInfo {
  name: string,
  description: string,
  telephone: string
}

export interface Ticket {
  id: number,
  category: string,
  status: string,
  priority: string | number,
  subject: string,
  assignee: string,
  updated: string,
  target: string,
  time: number,
  done: number
}