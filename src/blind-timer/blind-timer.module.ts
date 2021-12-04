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
import { BlindsSettingsPageComponent } from './pages/blinds-settings-page/blinds-settings-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerPageComponent,
    TimerComponent,
    TogglePauseComponent,
    LevelDisplayComponent,
    LevelDetailCardComponent,
    BlindsSettingsPageComponent,
  ],
  exports: [TimerPageComponent, LevelDetailCardComponent, BlindsSettingsPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class BlindTimerModule {}
