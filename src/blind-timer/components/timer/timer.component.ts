import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <p>timer works!</p>
    <div class="timer-div">
      <mat-progress-spinner strokeWidth="5" value="75"> </mat-progress-spinner>
      <span style="">10:35</span>
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
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log(this.el.nativeElement.width);
  }
}
