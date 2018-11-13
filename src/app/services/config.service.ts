import { Injectable } from '@angular/core';
import { Config } from '../common/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  config: Config;

  load(): Promise<void> {
    return new Promise(resolve => {
      this.http.get('assets/config.json').subscribe(config => {
        this.config = config as Config;
        this.config.language = localStorage.getItem('lang') || this.config.language;
        console.log(config);
        setTimeout(_ => resolve(), this.config.delay);
      });
    });
  }
}
