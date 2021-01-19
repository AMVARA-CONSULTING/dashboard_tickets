import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '@states/config.state';

@Component({
  selector: 'cism-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegendComponent {

  constructor(
    private _store: Store
  ) {
    this.colors = this._store.selectSnapshot(ConfigState.getColorScheme);
  }

  colors = [];

}
