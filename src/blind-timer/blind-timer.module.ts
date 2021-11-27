import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimerComponent } from './components/timer/timer.component';
import { TogglePauseComponent } from './components/toggle-pause/toggle-pause.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LevelDisplayComponent } from './components/level-display/level-display.component';
import { LevelDetailCardComponent } from './components/level-detail-card/level-detail-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TimerPageComponent,
    TimerComponent,
    TogglePauseComponent,
    LevelDisplayComponent,
    LevelDetailCardComponent,
  ],
  exports: [TimerPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexModule,
  ],
})
export class BlindTimerModule {}
