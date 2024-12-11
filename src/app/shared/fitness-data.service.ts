import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitnessDataService {
  // Dummy data for workouts
  private workouts = [
    { date: '2024-12-10', type: 'Running', duration: 30, calories: 300 },
    { date: '2024-12-11', type: 'Cycling', duration: 45, calories: 400 }
  ];

  // Dummy data for steps
  private steps = [
    { date: '2024-12-10', steps: 8000 },
    { date: '2024-12-11', steps: 10000 }
  ];

  // Dummy data for calories
  private calories = [
    { date: '2024-12-10', calories: 2000 },
    { date: '2024-12-11', calories: 2200 }
  ];

  // Methods to get dummy data
  getWorkouts() {
    return this.workouts;
  }

  getSteps() {
    return this.steps;
  }

  getCalories() {
    return this.calories;
  }
}
