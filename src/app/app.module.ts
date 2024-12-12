import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { StepsTrackerComponent } from './steps-tracker/steps-tracker.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { ProgressComponent } from './progress/progress.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutLogComponent,
    StepsTrackerComponent,
    CalorieTrackerComponent,
    ProgressComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }