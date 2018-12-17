import { Component, OnInit, VERSION, ChangeDetectionStrategy } from '@angular/core';
import { ConfigService } from '@services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'cism-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor(
    public config: ConfigService,
    private translate: TranslateService,
    private snack: MatSnackBar,
    public data: DataService,
    private router: Router,
    private keyValue: KeyValuePipe
  ) {
    data.currentLevel = 1
    this.version = VERSION.full
  }

  version

  ngOnInit() {
    let a: any[] = this.keyValue.transform(this.config.config.reports[this.config.config.scenario])
    a = a.filter(item => item.key !== 'monthsSelector' && item.key !== 'months')
    this.reports = a
  }

  reports: any[] = []

  setLang(code: string): void {
    localStorage.setItem('lang', code)
    this.translate.use(code)
    this.snack.open('Language changed successfully!', 'OK', { duration: 3000 });
  }

  reloadLang(): void {
    this.translate.reloadLang(this.config.config.language)
    this.snack.open('Language reloaded successfully!', 'OK', { duration: 3000 });
  }

  showConfig: boolean = false

}
