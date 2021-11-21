import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimerComponent } from './components/timer/timer.component';
import { TogglePauseComponent } from './components/toggle-pause/toggle-pause.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TimerPageComponent, TimerComponent, TogglePauseComponent],
  exports: [TimerPageComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
})
export class BlindTimerModule {}
