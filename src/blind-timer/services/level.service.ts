import { Injectable } from '@angular/core';
import { TimeServiceService } from './time-service.service';
import { Level } from '../objects/Level';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private _currentLevel: Level | undefined;

  private _currentLevelIndex: number;

  private _levelQueue: Level[];

  constructor(protected timeService: TimeServiceService) {
    const item = localStorage.getItem('levelQueue');
    if (item) {
      this._levelQueue = JSON.parse(item);
    } else {
      this._levelQueue = [
        {
          smallBlind: 5,
          bigBlind: 10,
          length: 12,
        },
        {
          smallBlind: 10,
          bigBlind: 20,
          length: 12,
        },
        {
          smallBlind: 15,
          bigBlind: 30,
          length: 12,
        },
        {
          smallBlind: 25,
          bigBlind: 50,
          length: 12,
        },
        {
          smallBlind: 50,
          bigBlind: 100,
          length: 12,
        },
        {
          smallBlind: 75,
          bigBlind: 150,
          length: 12,
        },
        {
          smallBlind: 100,
          bigBlind: 200,
          length: 12,
        },
        {
          smallBlind: 150,
          bigBlind: 300,
          length: 12,
        },
        {
          smallBlind: 200,
          bigBlind: 400,
          length: 12,
        },
        {
          smallBlind: 300,
          bigBlind: 600,
          length: 12,
        },
        {
          smallBlind: 450,
          bigBlind: 900,
          length: 12,
        },
        {
          smallBlind: 600,
          bigBlind: 1200,
          length: 12,
        },
        {
          smallBlind: 800,
          bigBlind: 1600,
          length: 12,
        },
        {
          smallBlind: 1000,
          bigBlind: 2000,
          length: 12,
        },
      ];
      this.updateLevelQueueStorage();
    }

    // eslint-disable-next-line prefer-destructuring
    this._currentLevel = this._levelQueue[0];
    this._currentLevelIndex = 0;
    timeService.startTimer(this._currentLevel.length * 60);
    timeService.currentTime.subscribe((value) => {
      if (this._currentLevel && value === this._currentLevel.length * 60) {
        this.callNextLevel();
      }
    });
  }

  callNextLevel() {
    this.timeService.stopTimer();
    this._currentLevelIndex = Math.min(this._currentLevelIndex + 1, this.levelQueue.length - 1);
    this._currentLevel = this._levelQueue[this._currentLevelIndex];
    if (this.currentLevel) {
      this.timeService.startTimer(this.currentLevel.length * 60);
    }
  }

  callPreviousLevel() {
    this.timeService.stopTimer();
    this._currentLevelIndex = Math.max(0, this._currentLevelIndex - 1);
    // eslint-disable-next-line operator-linebreak
    this._currentLevel =
      this.currentLevelIndex >= 0 ? this._levelQueue[this._currentLevelIndex] : undefined;
    if (this.currentLevel) {
      this.timeService.startTimer(this.currentLevel.length * 60);
    }
  }

  get currentLevel(): Level | undefined {
    return this._currentLevel;
  }

  get levelQueue(): Level[] {
    return this._levelQueue;
  }

  // set currentLevel(value: Level | undefined) {
  //   this._currentLevel = value;
  // }
  set currentLevelIndex(value: number) {
    this._currentLevelIndex = value;
    this._currentLevel = this._levelQueue[value];
  }

  get currentLevelIndex(): number {
    return this._currentLevelIndex;
  }

  nextLevel(): Level | undefined {
    return this._levelQueue.length > this._currentLevelIndex + 2
      ? this._levelQueue[this._currentLevelIndex + 1]
      : undefined;
  }

  addLevel(level: Level) {
    this._levelQueue.push(level);
    this.updateLevelQueueStorage();
  }

  removeLevel(index: number) {
    this._levelQueue.splice(index, 1);
    if (index === this.currentLevelIndex) {
      this.currentLevelIndex = Math.max(0, index - 1);
    }
    this.updateLevelQueueStorage();
  }

  set levelQueue(value: Level[]) {
    this._levelQueue = value;
    this.updateLevelQueueStorage();
  }

  updateLevelQueueStorage() {
    localStorage.setItem('levelQueue', JSON.stringify(this._levelQueue));
  }
}
