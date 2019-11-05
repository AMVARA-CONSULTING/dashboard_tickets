import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '@services/data.service';
import * as moment from 'moment';
import { WorkerService } from '@services/worker.service';
import { SAViewType } from '@other/interfaces';

@Component({
  selector: 'cism-system-robustness',
  templateUrl: './system-robustness.component.html',
  styleUrls: ['./system-robustness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemRobustnessComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _worker: WorkerService
  ) { }

  ngOnInit() {
  }
  
  view = new FormControl('monthly' as SAViewType)

}
