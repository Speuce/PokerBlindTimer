import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [TimerPageComponent, TimerComponent],
  exports: [TimerPageComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class BlindTimerModule {}
