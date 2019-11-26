import { Injectable } from '@angular/core';
import { Config } from '@other/interfaces';

@Injectable()
export class ConfigService {

  config: Config;

  displayedColumnsDefault: string[] = []
}
