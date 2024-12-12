import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css']
})
export class CalorieTrackerComponent {
  foodItem: string = '';
  calories: number | null = null;
  totalCalories: number = 0;
  calorieGoal: number = 2000;

  addCalorie() {
    if (this.foodItem.trim() !== '' && this.calories != null && this.calories > 0) {
      this.totalCalories += this.calories;
      console.log('Calories Added:', {
        food: this.foodItem,
        calories: this.calories
      });
      alert('Calorie Added!');
      
      this.foodItem = '';
      this.calories = null;
    } else {
      alert('Please fill in all fields!');
    }
  }
}