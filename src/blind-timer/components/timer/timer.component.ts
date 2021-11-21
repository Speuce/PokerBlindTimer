import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `
    <div class="timer-div">
      <mat-progress-spinner strokeWidth="5" [value]="progress"> </mat-progress-spinner>
      <span style="">{{ this.displayedTime }}</span>
    </div>
  `,
  styles: [
    `
      .timer-div {
        position: relative;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        width: 100%;
        padding-top: 100%;
      }
      span {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        font-size: 100px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .mat-progress-spinner {
        position: absolute;
        width: 100% !important;
        height: 100% !important;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .mat-progress-spinner ::ng-deep svg {
        width: 100% !important;
        height: 100% !important;
      }
    `,
  ],
})
export class TimerComponent implements OnInit {
  @Input() time!: Observable<number>;

  @Input() maxTime: number = 1;

  displayedTime: string = '';

  progress: number = 100;

  ngOnInit(): void {
    this.time.subscribe((value) => {
      const timeLeft = this.maxTime - value;
      this.progress = (timeLeft / this.maxTime) * 100;
      this.displayedTime = new Date(timeLeft * 1000).toISOString().substr(14, 5);
    });
  }
}
