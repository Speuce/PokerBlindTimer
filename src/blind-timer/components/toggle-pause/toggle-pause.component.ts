import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeServiceService } from '../../services/time-service.service';

@Component({
  selector: 'app-toggle-pause',
  template: `
    <button mat-fab color="primary" (click)="togglePause()">
      <mat-icon *ngIf="value?.getValue(); else play">play_arrow</mat-icon>
      <ng-template #play>
        <mat-icon>pause</mat-icon>
      </ng-template>
    </button>
  `,
  styles: [],
})
export class TogglePauseComponent {
  @Input() value: BehaviorSubject<boolean> | undefined;

  constructor(protected timeService: TimeServiceService) {
    this.value = this.timeService.paused;
  }

  togglePause() {
    this.value?.next(!this.value?.getValue());
  }
}
