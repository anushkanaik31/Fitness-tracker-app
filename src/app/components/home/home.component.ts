import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Images and quotes combined
  slides = [
    { 
      image: 'assets/images/fitness-journey1.jpg',
      quote: "The journey of a thousand miles begins with a single step.",
      text: "Start your fitness journey today!"
    },
    { 
      image: 'assets/images/fitness-journey2.jpg',
      quote: "Progress is the sum of small efforts, repeated day in and day out.",
      text: "Small steps lead to big results!"
    },
    { 
      image: 'assets/images/fitness-journey3.jpg',
      quote: "Your body can stand almost anything. It’s your mind that you have to convince.",
      text: "Train your mind to push through any obstacle."
    },
    { 
      image: 'assets/images/fitness-journey4.jpg',
      quote: "Don’t limit your challenges. Challenge your limits.",
      text: "Push yourself beyond your limits."
    },
    { 
      image: 'assets/images/fitness-journey5.jpg',
      quote: "It never gets easier. You just get stronger.",
      text: "Strength comes with persistence."
    }
  ];

  // Current Slide
  currentSlideIndex = 0;

  // Change Slide (Image + Quote)
  changeSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
