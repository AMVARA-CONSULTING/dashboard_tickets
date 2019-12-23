import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactInfo, Config } from '@other/interfaces';
import { DataService } from '@services/data.service';
import { Store, Select } from '@ngxs/store';
import { ConfigState } from '@states/config.state';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpComponent {

  config: Config

  constructor(
    public data: DataService,
    private _store: Store
  ) {
    this.config = this._store.selectSnapshot<Config>((state: any) => state.config)
    data.currentLevel = 1
    this.contacts = this.config.contacts[this.config.scenario]
  }

  contacts: ContactInfo[]

}
