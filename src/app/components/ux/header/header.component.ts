import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { ConfigState } from '@states/config.state';
import { Config } from '@other/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'cism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  
  @Select(ConfigState) config$: Observable<Config>

  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  navigate(url: string): void {
    this.data.loading.next(true)
    this.router.navigate([url])
    this.data.opened.next(false)
  }

  open() {
    this.data.opened.next(!this.data.opened.value)
  }

}
