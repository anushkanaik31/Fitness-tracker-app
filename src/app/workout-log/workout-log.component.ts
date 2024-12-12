import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent {
  @ViewChild('workoutLoggedPopup') workoutLoggedPopup!: ElementRef;
  @ViewChild('closePopupBtn') closePopupButton!: ElementRef;

  workoutType: string = '';
  workoutDuration: number | null = null;
  workoutIntensity: string = '';

  logWorkout() {
    if (this.workoutType && this.workoutDuration && this.workoutIntensity) {
      console.log('Workout Logged:', {
        name: this.workoutType,
        duration: this.workoutDuration,
        intensity: this.workoutIntensity,
      });

      this.showPopup();
      
      this.workoutType = '';
      this.workoutDuration = null;
      this.workoutIntensity = '';
    } else {
      alert('Please fill in all fields!');
    }
  }

  showPopup() {
    this.workoutLoggedPopup.nativeElement.style.display = 'flex';
  }

  closePopup() {
    this.workoutLoggedPopup.nativeElement.style.display = 'none';
  }
}