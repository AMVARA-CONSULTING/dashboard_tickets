import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { ConfigState } from '@states/config.state';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '@other/interfaces';

@Component({
  selector: 'cism-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Select(ConfigState) config$: Observable<Config>

}
