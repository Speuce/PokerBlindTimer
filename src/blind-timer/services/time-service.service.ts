import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, interval, Observable, Subject, Subscription } from 'rxjs';
import { filter, map, share, take, withLatestFrom } from 'rxjs/operators';

function getPausableTimer(timeout: number, pause: BehaviorSubject<boolean>): Observable<number> {
  return defer(() => {
    let seconds = 1;
    return interval(1000).pipe(
      withLatestFrom(pause),
      filter(([, paused]) => !paused),
      take(timeout),
      // eslint-disable-next-line no-return-assign
      map(() => (seconds += 1))
    );
  }).pipe(share());
}

@Injectable({
  providedIn: 'root',
})
export class TimeServiceService {
  currentTime: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _currentSubscription: Subscription | undefined;

  paused = new BehaviorSubject(true);

  startTimer(length: number) {
    this._currentSubscription = getPausableTimer(length, this.paused).subscribe((value) => {
      this.currentTime.next(value);
    });
  }

  stopTimer() {
    this._currentSubscription?.unsubscribe();
    this._currentSubscription = undefined;
  }

  toggleTimerPaused() {
    this.paused.next(!this.paused.getValue());
  }
}
