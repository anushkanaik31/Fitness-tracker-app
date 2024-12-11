import { Component, OnInit } from '@angular/core';
import { FitnessDataService } from '../shared/fitness-data.service';

@Component({
  selector: 'app-steps-tracker',
  templateUrl: './steps-tracker.component.html',
  styleUrls: ['./steps-tracker.component.css']
})
export class StepsTrackerComponent implements OnInit {
  steps: any[] = [];

  constructor(private fitnessDataService: FitnessDataService) {}

  ngOnInit(): void {
    this.steps = this.fitnessDataService.getSteps();
  }
}
