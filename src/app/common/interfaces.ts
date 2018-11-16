export interface Config {
  language: string;
  readonly version: string;
  readonly delay: number;
  readonly reports: any;
  readonly contacts: any[];
  readonly appTitle: string;
  readonly languageCodes: any;
  readonly changelog: any[];
  readonly copyright: string;
  readonly columns: any,
  infiniteScroll: boolean;
  negativeBad: boolean | number;
  [propName: string]: any;
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
  priority: string,
  subject: string,
  assignee: string,
  updated: string,
  target: string,
  time: number,
  done: number
}