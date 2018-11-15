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
      (document.querySelector('.progress-value') as HTMLElement).style.width = '35%';
      this.http.get('assets/config.json').subscribe(config => {
        (document.querySelector('.progress-value') as HTMLElement).style.width = '40%';
        this.config = config as Config;
        (document.querySelector('.progress-value') as HTMLElement).style.width = '45%';
        this.config.language = localStorage.getItem('lang') || this.config.language;
        (document.querySelector('.progress-value') as HTMLElement).style.width = '50%';
        console.log(config);
        (document.querySelector('.progress-value') as HTMLElement).style.transitionDuration = this.config.delay + 'ms';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '100%';
        setTimeout(_ => resolve(), this.config.delay);
      });
    });
  }
}
