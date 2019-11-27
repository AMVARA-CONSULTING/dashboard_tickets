import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactInfo } from '@other/interfaces';
import { ConfigService } from '@services/config.service';
import { DataService } from '@services/data.service';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpComponent {

  constructor(
    public config: ConfigService,
    public data: DataService
  ) {
    data.currentLevel = 1
  }

  contacts: ContactInfo[] = this.config.config.contacts[this.config.config.scenario]

}
