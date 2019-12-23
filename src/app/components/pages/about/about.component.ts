import { Component, OnInit, VERSION, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '@services/data.service';
import { KeyValuePipe } from '@angular/common';
import { Store } from '@ngxs/store';
import { Config } from '@other/interfaces';
import { UpdateConfig } from '@states/config.state';

@Component({
  selector: 'cism-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  config: Config

  constructor(
    private translate: TranslateService,
    private snack: MatSnackBar,
    public data: DataService,
    private keyValue: KeyValuePipe,
    private _store: Store
  ) {
    this.config = this._store.selectSnapshot<Config>((state: any) => state.config)
    data.currentLevel = 1
  }

  enableExperimentalFeatures(tof) {
    localStorage.setItem('enableExperimentalFeatures', tof ? 'yes' : 'no')
    location.reload()
  }

  version = VERSION.full

  ngOnInit() {
    let a: any[] = this.keyValue.transform(this.config.reports[this.config.scenario])
    a = a.filter(item => item.key !== 'monthsSelector' && item.key !== 'months')
    this.reports = a
  }

  reports: any[] = []

  setLang(code: string): void {
    localStorage.setItem('lang', code)
    this.translate.use(code)
    this._store.dispatch(new UpdateConfig({ language: code }))
    this.snack.open('Language changed successfully!', 'OK', { duration: 3000 });
  }

  reloadLang() {
    this.translate.reloadLang(this.config.language)
    this.snack.open('Language reloaded successfully!', 'OK', { duration: 3000 });
  }

}
