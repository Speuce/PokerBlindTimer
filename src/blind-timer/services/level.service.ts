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
    this._levelQueue = [
      {
        smallBlind: 5,
        bigBlind: 10,
        length: 12,
      },
    ];
    // eslint-disable-next-line prefer-destructuring
    this._currentLevel = this._levelQueue[0];
    this._currentLevelIndex = 0;
    timeService.startTimer(this._currentLevel.length * 60);
    timeService.currentTime.subscribe((value) => {
      if (value === this._currentLevel?.length) {
        this.callNextLevel();
      }
    });
  }

  callNextLevel() {
    this.timeService.stopTimer();
    this._currentLevelIndex += 1;
    this._currentLevel = this._levelQueue[this._currentLevelIndex];
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
    return this._levelQueue?.length > 0 ? this._levelQueue[0] : undefined;
  }

  addLevel(level: Level) {
    this._levelQueue.push(level);
  }

  removeLevel(index: number) {
    this._levelQueue.splice(index, 1);
    if (index === this.currentLevelIndex) {
      this.currentLevelIndex = Math.max(0, index - 1);
    }
  }

  clearLevels() {
    this._levelQueue = [];
    this._currentLevel = undefined;
    this._currentLevelIndex = 0;
  }

  set levelQueue(value: Level[]) {
    this._levelQueue = value;
  }
}
