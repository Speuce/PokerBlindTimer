import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeServiceService } from '../../services/time-service.service';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-timer-page',
  template: `
    <p>timer-page works!</p>
    <div style="width:100%">
      <div
        style="
          margin: 0 auto;
          min-width: 350px;
          min-height: 350px;
          max-width: 60vh;
          max-height: 60vh;
        "
      >
        <app-timer
          [maxTime]="this.levelService.currentLevel?.length ?? 1"
          [time]="time"
        ></app-timer>
      </div>
    </div>

    <div style="margin-top: 20px;" class="center-nowrap">
      <app-toggle-pause></app-toggle-pause>
    </div>
  `,
  styles: [
    `
      .center-nowrap {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
      }
    `,
  ],
})
export class TimerPageComponent implements OnInit {
  time: Subject<number>;

  constructor(protected timeService: TimeServiceService, public levelService: LevelService) {
    this.time = timeService.currentTime;
  }

  ngOnInit(): void {
    this.levelService.nextLevel();
  }
}
