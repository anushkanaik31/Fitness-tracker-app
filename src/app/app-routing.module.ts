import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { StepsTrackerComponent } from './steps-tracker/steps-tracker.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: '', redirectTo: '/workout-log', pathMatch: 'full' },
  { path: 'workout-log', component: WorkoutLogComponent },
  { path: 'steps-tracker', component: StepsTrackerComponent },
  { path: 'calorie-tracker', component: CalorieTrackerComponent },
  { path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
