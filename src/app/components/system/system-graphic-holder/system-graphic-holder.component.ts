import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cism-system-graphic-holder',
  templateUrl: './system-graphic-holder.component.html',
  styleUrls: ['./system-graphic-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemGraphicHolderComponent {

  constructor() { }

  @Input() title: string

}
