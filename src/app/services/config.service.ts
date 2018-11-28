import { Injectable } from '@angular/core';
import { Config } from '../common/interfaces';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ToolsService } from 'app/tools.service';

@Injectable()
export class ConfigService {

  constructor(
    private http: HttpClient,
    private data: DataService,
    private tools: ToolsService
  ) { }

  config: Config;

  displayedColumnsDefault: string[] = ['id', 'category', 'status', 'priority', 'subject', 'assignee', 'updated', 'target', 'time', 'done', 'options']

  load(): Promise<void> {
    return new Promise(resolve => {
      this.data.disabledAnimations = this.tools.isIE();
      (document.querySelector('.progress-value') as HTMLElement).style.width = '35%';
      this.http.get('assets/config.json').subscribe(config => {
        (document.querySelector('.progress-value') as HTMLElement).style.width = '40%';
        this.config = config as Config;
        (document.querySelector('.progress-value') as HTMLElement).style.width = '45%';
        this.config.language = localStorage.getItem('lang') || this.config.language;
        (document.querySelector('.progress-value') as HTMLElement).style.width = '50%';
        this.config.displayedColumns = JSON.parse(localStorage.getItem('displayedColumns')) || this.displayedColumnsDefault;
        (document.querySelector('.progress-value') as HTMLElement).style.transitionDuration = this.config.delay + 'ms';
        (document.querySelector('.progress-value') as HTMLElement).style.width = '100%';
        console.log(this.config)
        setTimeout(_ => resolve(), this.config.delay);
      });
    });
  }
}
