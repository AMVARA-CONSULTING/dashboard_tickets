import './parsers.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de';
dayjs.locale('de');
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
(window as any).dayjs = dayjs;

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
