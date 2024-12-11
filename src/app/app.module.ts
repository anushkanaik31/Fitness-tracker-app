import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { StepsTrackerComponent } from './steps-tracker/steps-tracker.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutLogComponent,
    StepsTrackerComponent,
    CalorieTrackerComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
