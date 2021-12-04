import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeServiceService } from '../../services/time-service.service';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-timer-page',
  template: `
    <button
      color="grey"
      style="float:right; z-index: 3; right: 50px; top: 40px;"
      mat-icon-button
      (click)="menuOpen.emit()"
    >
      <mat-icon style="transform: scale(2)">menu</mat-icon>
    </button>
    <div fxLayout="column" style="min-height: 100%; width: 100%">
      <div style="margin: 20px 0;" class="center-nowrap">
        <span style="font-size: 2.5em; font-weight: 450;">
          Level {{ this.levelService.currentLevelIndex + 1 }}
        </span>
      </div>
      <div style="min-width:100%; display: inline-flex;">
        <div
          style="
          flex-grow: 5;
          margin: 0 auto;
          min-width: 350px;
          min-height: 350px;
          max-width: 60vh;
          max-height: 60vh;
        "
        >
          <app-timer
            [maxTime]="(this.levelService.currentLevel?.length ?? 1) * 60"
            [time]="time"
          ></app-timer>
        </div>
      </div>

      <div style="margin-top: 20px;" class="center-nowrap">
        <button
          mat-icon-button
          color="grey"
          style="align-self: center;"
          (click)="levelService.callPreviousLevel()"
        >
          <mat-icon style="transform: scale(1.2)">arrow_back_ios</mat-icon>
        </button>
        <app-toggle-pause></app-toggle-pause>
        <button
          mat-icon-button
          color="grey"
          style="align-self: center; margin-left: 4px;"
          (click)="levelService.callNextLevel()"
        >
          <mat-icon style="transform: scale(1.2)">arrow_forward_ios</mat-icon>
        </button>
      </div>
      <div
        fxFlex="grow"
        fxLayout="row"
        fxLayout.lt-md="column"
        style="max-width: 98%; padding: 20px 20px 0 25px;"
        fxLayoutGap.gt-sm="40px"
        fxLayoutGap="10px"
      >
        <div fxFlex="grow">
          <app-level-detail-card
            fxLayout="column"
            cardTitle="Current Level"
            [isMainLevel]="true"
            [level]="levelService.currentLevel"
            style="height: 100%; max-height: 100%"
          ></app-level-detail-card>
        </div>
        <div fxFlex="grow">
          <app-level-detail-card
            fxLayout="column"
            cardTitle="Next Level"
            [isMainLevel]="false"
            [level]="levelService.nextLevel()"
            style="height: 100%; max-height: 100%"
          ></app-level-detail-card>
        </div>
      </div>
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

      .center-nowrap {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
      }

      .mat-grey {
        color: #b8b8b8;
      }
    `,
  ],
})
export class TimerPageComponent {
  @Output() menuOpen: EventEmitter<void> = new EventEmitter<void>();

  time: Subject<number>;

  constructor(protected timeService: TimeServiceService, public levelService: LevelService) {
    this.time = timeService.currentTime;
  }
}
