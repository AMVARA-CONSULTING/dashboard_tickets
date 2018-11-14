import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private translate:TranslateService, public config:ConfigService){
    translate.setDefaultLang('en')
    translate.use(localStorage.getItem('lang') || config.config.language)

  }
  title = 'cism';
}
