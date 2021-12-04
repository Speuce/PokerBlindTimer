import { Component, Input } from '@angular/core';
import { Level } from '../../objects/Level';

@Component({
  selector: 'app-level-detail-card',
  template: ` <mat-card style="width: 100%; min-height: 100px; height: 100%">
    <mat-card-title *ngIf="isMainLevel; else subtitl">
      {{ cardTitle }}
    </mat-card-title>
    <ng-template #subtitl>
      <mat-card-subtitle>
        {{ cardTitle }}
      </mat-card-subtitle>
    </ng-template>
    <mat-card-content
      style="font-weight: 600; font-size:calc(25px + 3vw);"
      [class.not-main-level]="!isMainLevel"
    >
      <div style="top: 50%; position: absolute">
        {{ this.level?.smallBlind }} / {{ this.level?.bigBlind }}
      </div>
    </mat-card-content>
  </mat-card>`,
  styles: [
    `
      .not-main-level {
        color: #b8b8b8;
      }
    `,
  ],
})
export class LevelDetailCardComponent {
  @Input() cardTitle: string = '';

  @Input() level: Level | undefined;

  @Input() isMainLevel: boolean = true;
}
