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
