import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cism-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent {

  @Input() color: string = ''
  @Input() name: string = ''

}
