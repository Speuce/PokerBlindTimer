import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BlindTimerModule } from '../blind-timer/blind-timer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, BlindTimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
