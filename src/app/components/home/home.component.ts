import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    'assets/images/fitness-journey1.jpg',
    'assets/images/fitness-journey2.jpg',
    'assets/images/fitness-journey3.jpg',
    'assets/images/fitness-journey4.jpg',
    'assets/images/fitness-journey5.jpg'
  ];

  // Initial Quote
  currentImageIndex = 0;
  currentQuote: string = "The journey of a thousand miles begins with a single step.";
  currentQuoteText: string = "Start your fitness journey today!";

  // Quotes Arrays
  quotes: string[] = [
    "The journey of a thousand miles begins with a single step.",
    "Progress is the sum of small efforts, repeated day in and day out.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Don’t limit your challenges. Challenge your limits.",
    "It never gets easier. You just get stronger."
  ];

  quotesText: string[] = [
    "Start your fitness journey today!",
    "Small steps lead to big results!",
    "Train your mind to push through any obstacle.",
    "Push yourself beyond your limits.",
    "Strength comes with persistence."
  ];

  // Change Quote on Image Click
  changeQuote(index: number): void {
    this.currentQuote = this.quotes[index];
    this.currentQuoteText = this.quotesText[index];
  }

  // Change Image on Image Click
  changeImage(index: number): void {
    this.currentImageIndex = index;
    this.changeQuote(index);  // Update quote when image changes
  }
}
