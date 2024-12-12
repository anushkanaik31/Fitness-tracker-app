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
    this.totalSteps += 100;  
    this.updateProgress();
  }

  updateProgress() {
    this.progressPercentage = (this.totalSteps / this.goalSteps) * 1000;
    if (this.totalSteps > this.goalSteps) {
      this.totalSteps = this.goalSteps; 
      this.progressPercentage = 100;
    }
  }
}