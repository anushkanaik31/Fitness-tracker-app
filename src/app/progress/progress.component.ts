import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  workoutGoal: number = 30;
  currentProgress: number = 10; 

  ngOnInit(): void {
    this.createDummyChart();
  }

  createDummyChart() {
    const ctx = document.getElementById('progressChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Progress', 'Goal'],
        datasets: [{
          label: 'Current Progress',
          data: [this.currentProgress, 0], 
          backgroundColor: '#00bcd4',
          borderColor: '#0097a7',
          borderWidth: 1
        }, {
          label: 'Goal',
          data: [0, this.workoutGoal],
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: '#888',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

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