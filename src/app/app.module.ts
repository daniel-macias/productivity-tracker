import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';
import { GoalComponent } from './components/goal/goal.component';
import { WeekProgressComponent } from './components/week-progress/week-progress.component'

@NgModule({
  declarations: [
    AppComponent,
    GoalTrackerComponent,
    GoalComponent,
    WeekProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
