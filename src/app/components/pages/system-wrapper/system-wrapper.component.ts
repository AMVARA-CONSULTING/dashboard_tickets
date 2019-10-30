import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { WorkerService } from '@services/worker.service';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'cism-system-wrapper',
  templateUrl: './system-wrapper.component.html',
  styleUrls: ['./system-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemWrapperComponent implements OnInit {

  constructor(
    private _worker: WorkerService
  ) { }

  ngOnInit() {
  }

}
