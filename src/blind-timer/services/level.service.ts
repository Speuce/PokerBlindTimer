import { Injectable } from '@angular/core';
import { TimeServiceService } from './time-service.service';
import { Level } from '../objects/Level';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private _currentLevel: Level | undefined;

  private _levelQueue: Level[];

  constructor(protected timeService: TimeServiceService) {
    this._levelQueue = [
      {
        levelNumber: 1,
        smallBlind: 1,
        bigBlind: 2,
        length: 30,
      },
      {
        levelNumber: 2,
        smallBlind: 2,
        bigBlind: 4,
        length: 60,
      },
    ];
    timeService.currentTime.subscribe((value) => {
      if (value === this._currentLevel?.length) {
        this.callNextLevel();
      }
    });
  }

  callNextLevel() {
    this.timeService.stopTimer();
    this._currentLevel = this._levelQueue.shift();
    if (this.currentLevel) {
      this.timeService.startTimer(this.currentLevel.length);
    }
  }

  get currentLevel(): Level | undefined {
    return this._currentLevel;
  }

  set currentLevel(value: Level | undefined) {
    this._currentLevel = value;
  }

  nextLevel(): Level | undefined {
    return this._levelQueue?.length > 0 ? this._levelQueue[0] : undefined;
  }

  addLevel(level: Level) {
    this._levelQueue.push(level);
  }

  removeLevel(index: number) {
    this._levelQueue.splice(index, 1);
  }

  clearLevels() {
    this._levelQueue = [];
    this.currentLevel = undefined;
  }

  set levelQueue(value: Level[]) {
    this._levelQueue = value;
  }
}
