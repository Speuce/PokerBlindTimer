import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeServiceService } from '../../services/time-service.service';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-timer-page',
  template: `
    <p>timer-page works!</p>
    <div style="min-width: 350px; min-height: 350px; max-width: 50vw; max-height: 50vw">
      <app-timer [maxTime]="this.levelService.currentLevel?.length ?? 1" [time]="time"></app-timer>
    </div>
  `,
  styles: [],
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
