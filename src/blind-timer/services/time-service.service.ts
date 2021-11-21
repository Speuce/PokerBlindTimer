import { Injectable } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeServiceService {
  currentTime: Subject<number> = new Subject<number>();

  private _currentSubscription: Subscription | undefined;

  startTimer(length: number) {
    this._currentSubscription = timer(length, 1000).subscribe((value) => {
      this.currentTime.next(value);
    });
  }

  stopTimer() {
    this._currentSubscription?.unsubscribe();
  }
}
