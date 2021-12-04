import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LevelService } from '../../services/level.service';
import { Level } from '../../objects/Level';

@Component({
  selector: 'app-blinds-settings-page',
  template: `
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; margin: 25px 7vw; align-items: flex-start;"
    >
      <h1>Levels</h1>
      <button mat-icon-button color="grey">
        <mat-icon style="transform: scale(2)">close</mat-icon>
      </button>
    </div>
    <div style="padding: 0 15px;">
      <div cdkDropList class="level-list" (cdkDropListDropped)="drop($event)">
        <div
          class="level-list-item mat-elevation-z2"
          *ngFor="let level of levelService.levelQueue; let i = index"
          [class.level-list-item-selected]="levelService.currentLevel === level"
          cdkDrag
          (click)="selectLevel(i)"
        >
          <div class="level-list-handle" cdkDragHandle>
            <mat-icon color="grey">drag_handle</mat-icon>
          </div>
          <mat-form-field
            appearance="outline"
            class="level-list-field"
            style="margin-right: 10px"
            (click)="$event.stopPropagation()"
          >
            <mat-label>Small Blind</mat-label>
            <input type="number" matInput [(ngModel)]="level.smallBlind" />
          </mat-form-field>
          <mat-form-field
            appearance="outline"
            class="level-list-field"
            style="margin-right: 10px"
            (click)="$event.stopPropagation()"
          >
            <mat-label>Big Blind</mat-label>
            <input type="number" matInput [(ngModel)]="level.bigBlind" />
          </mat-form-field>
          <mat-form-field
            appearance="outline"
            class="level-list-field"
            (click)="$event.stopPropagation()"
          >
            <mat-label>Time (m)</mat-label>
            <input type="number" matInput [(ngModel)]="level.length" />
          </mat-form-field>
          <button
            *ngIf="levelService.levelQueue.length > 1"
            mat-icon-button
            class="trash"
            style="margin: 0 0 0 5px; padding: 0; max-width: 24px !important;"
            (click)="deleteLevel(i)"
          >
            <mat-icon color="grey">delete</mat-icon>
          </button>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 25px">
      <button mat-raised-button color="primary" (click)="addLevel()">
        <mat-icon>add</mat-icon>
        Add Level
      </button>
    </div>
  `,
  styles: [
    `
      /** {*/
      /*  font-size: 50px;*/
      /*}*/
      h1 {
        font-size: 60px;
        font-weight: 450;
        height: 80px;
        margin-bottom: 0;
        margin-top: 15px;
      }

      .mat-button.mat-small {
        min-width: 1%;
      }

      ::ng-deep .mat-form-field-wrapper {
        padding-bottom: 0 !important;
      }
      ::ng-deep .mat-form-field-infix {
        padding: 12px 0 !important;
      }
      .mat-grey {
        color: #b8b8b8;
      }
    `,
    `
      .level-list {
        width: 100%;
        min-height: 80px;
        display: block;
        background: white;
      }

      .level-list-item {
        padding: 25px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        background: white;
        font-weight: 400;
        font-size: 20px;
      }

      .level-list-item-selected {
        background-color: #fffdcc;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .level-list.cdk-drop-list-dragging .level-list-item:not(.cdk-drag-placeholder) {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }

      .level-list-handle {
        cursor: move;
        margin: 0 10px 0 0;
        padding-top: 5px;
      }
    `,
    `
      .level-list-field {
        min-width: 60px;
        font-size: 16px;
      }
    `,
  ],
})
export class BlindsSettingsPageComponent implements OnInit {
  constructor(public levelService: LevelService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Level>) {
    moveItemInArray(this.levelService.levelQueue, event.previousIndex, event.currentIndex);
  }

  selectLevel(index: number) {
    this.levelService.currentLevelIndex = index;
  }

  addLevel() {
    const lastLevel = this.levelService.levelQueue[this.levelService.levelQueue.length - 1];
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const newSb = round(lastLevel.smallBlind * 1.4);
    this.levelService.addLevel({
      smallBlind: newSb,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      bigBlind: round(newSb * 2),
      length: lastLevel.length,
    });
  }

  deleteLevel(index: number) {
    this.levelService.removeLevel(index);
  }
}

export function round(value: number) {
  if (value < 5) {
    return Math.round(value);
  }
  if (value <= 25) {
    return Math.ceil(value / 5) * 5;
  }
  if (value <= 175) {
    return Math.ceil(value / 25) * 25;
  }
  if (value <= 500) {
    return Math.ceil(value / 50) * 50;
  }
  return Math.ceil(value / 100) * 100;
}
