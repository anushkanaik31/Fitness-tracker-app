import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  // Daily Data
  stepsCompleted: number = 7500;
  stepsGoal: number = 10000;
  stepsProgress: number = (this.stepsCompleted / this.stepsGoal) * 100;

  caloriesBurned: number = 300;
  caloriesGoal: number = 500;
  caloriesProgress: number = (this.caloriesBurned / this.caloriesGoal) * 100;

  workoutsCompleted: number = 5;
  workoutsGoal: number = 10;
  workoutsProgress: number = (this.workoutsCompleted / this.workoutsGoal) * 100;

  // Weekly Data
  weeklyStepsCompleted: number = 45000;
  weeklyStepsGoal: number = 70000;
  weeklyStepsProgress: number = (this.weeklyStepsCompleted / this.weeklyStepsGoal) * 100;

  weeklyCaloriesBurned: number = 2000;
  weeklyCaloriesGoal: number = 3500;
  weeklyCaloriesProgress: number = (this.weeklyCaloriesBurned / this.weeklyCaloriesGoal) * 100;

  weeklyWorkoutsCompleted: number = 30;
  weeklyWorkoutsGoal: number = 50;
  weeklyWorkoutsProgress: number = (this.weeklyWorkoutsCompleted / this.weeklyWorkoutsGoal) * 100;

  // Monthly Data
  monthlyStepsCompleted: number = 200000;
  monthlyStepsGoal: number = 300000;
  monthlyStepsProgress: number = (this.monthlyStepsCompleted / this.monthlyStepsGoal) * 100;

  monthlyCaloriesBurned: number = 10000;
  monthlyCaloriesGoal: number = 15000;
  monthlyCaloriesProgress: number = (this.monthlyCaloriesBurned / this.monthlyCaloriesGoal) * 100;

  monthlyWorkoutsCompleted: number = 120;
  monthlyWorkoutsGoal: number = 150;
  monthlyWorkoutsProgress: number = (this.monthlyWorkoutsCompleted / this.monthlyWorkoutsGoal) * 100;
}
