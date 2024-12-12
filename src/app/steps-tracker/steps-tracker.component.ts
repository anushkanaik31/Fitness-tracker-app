import { Component } from '@angular/core';

@Component({
  selector: 'app-steps-tracker',
  templateUrl: './steps-tracker.component.html',
  styleUrls: ['./steps-tracker.component.css']
})
export class StepsTrackerComponent {
  totalSteps: number = 0;
  goalSteps: number = 10000;
  progressPercentage: number = 0;

  addSteps() {
    this.totalSteps += 100;  // Adding 100 steps each time
    this.updateProgress();
  }

  updateProgress() {
    this.progressPercentage = (this.totalSteps / this.goalSteps) * 100;
    if (this.totalSteps > this.goalSteps) {
      this.totalSteps = this.goalSteps;  // Cap the total steps at goal
      this.progressPercentage = 100;
    }
  }
}
