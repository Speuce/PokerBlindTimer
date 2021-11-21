import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  template: `
    <p>timer-page works!</p>
    <div style="min-width: 350px; min-height: 350px; max-width: 50vw; max-height: 50vw">
      <app-timer></app-timer>
    </div>
  `,
  styles: [],
})
export class TimerPageComponent {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor,@typescript-eslint/no-empty-function
  constructor() {}
}
