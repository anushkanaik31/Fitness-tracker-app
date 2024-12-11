import { Component, OnInit } from '@angular/core';
import { FitnessDataService } from '../shared/fitness-data.service';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent implements OnInit {
  workouts: any[] = [];

  constructor(private fitnessDataService: FitnessDataService) {}

  ngOnInit(): void {
    this.workouts = this.fitnessDataService.getWorkouts();
  }
}
