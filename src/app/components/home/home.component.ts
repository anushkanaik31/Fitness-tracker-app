import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentIndex: number = 0;
  images: NodeListOf<HTMLImageElement> = {} as NodeListOf<HTMLImageElement>; // Initializing as empty object
  dots: NodeListOf<HTMLSpanElement> = {} as NodeListOf<HTMLSpanElement>; // Initializing as empty object

  constructor() { }

  ngOnInit(): void {
    this.images = document.querySelectorAll('.slider-image');
    this.dots = document.querySelectorAll('.dot');

    this.changeImage();

    setInterval(() => this.changeImage(), 10000);
  }

  changeImage(): void {
    this.images.forEach((image) => image.style.display = 'none');
    this.dots.forEach((dot) => dot.classList.remove('active'));

    this.images[this.currentIndex].style.display = 'block';
    this.dots[this.currentIndex].classList.add('active');

    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  }
}