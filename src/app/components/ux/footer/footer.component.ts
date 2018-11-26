import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConfigService } from '@services/config.service';

@Component({
  selector: 'cism-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit() {
  }

}
