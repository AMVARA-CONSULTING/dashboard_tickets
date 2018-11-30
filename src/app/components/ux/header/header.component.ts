import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private data: DataService,
    private router: Router
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
