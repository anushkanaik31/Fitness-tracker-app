import { Component, OnInit } from '@angular/core';
import { FitnessDataService } from '../shared/fitness-data.service';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.scss']
})
export class CalorieTrackerComponent implements OnInit {
  calories: any[] = [];

  constructor(private fitnessDataService: FitnessDataService) {}

  ngOnInit(): void {
    this.calories = this.fitnessDataService.getCalories();
  }
}
