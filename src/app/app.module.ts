import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';
import { GoalComponent } from './components/goal/goal.component';
import { WeekProgressComponent } from './components/week-progress/week-progress.component'
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { NewGoalDialogComponent } from './components/new-goal-dialog/new-goal-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GoalTrackerComponent,
    GoalComponent,
    WeekProgressComponent,
    NewGoalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
