import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '@services/data.service';
import { ToolsService } from 'app/tools.service';
import { WorkerService } from '@services/worker.service';

@Component({
  selector: 'cism-system-wrapper',
  templateUrl: './system-wrapper.component.html',
  styleUrls: ['./system-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemWrapperComponent implements OnInit {

  constructor(
    private _data: DataService,
    private _worker: WorkerService
  ) { }

  ngOnInit() {
    let job = this._worker.run<number>(data => {
      console.log("Hola")
      // @ts-ignore
      return data
    }, 11)
    job.then(result => console.log(result))
  }

}
