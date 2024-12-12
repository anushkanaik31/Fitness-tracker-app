import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  workoutGoal: number = 30; // E.g., 30 workouts per month
  currentProgress: number = 0;

  incrementProgress() {
    if (this.currentProgress < this.workoutGoal) {
      this.currentProgress++;
      console.log('Progress Updated:', this.currentProgress);
      alert('Progress Updated!');
    } else {
      alert('Goal Achieved!');
    }
  }
}
