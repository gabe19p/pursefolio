import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  currentIndex: number = 0; // Start from the first slide
  images = [
    {
      name: 'secX.png',
      alt: 'SecurityX (CASP+) logo',
      title: 'CompTIA',
      details: 'SecurityX (formerly CASP+)',
      year: '2025',
    },
    {
      name: 'bellevue.png',
      alt: 'Bellevue University logo',
      title: 'Bellevue University',
      details: 'B.S. Web Development',
      year: '2023',
    },
    {
      name: 'sec+.png',
      alt: 'Security Plus logo',
      title: 'CompTIA',
      details: 'Security+',
      year: '2022',
    },
    {
      name: 'ccaf.png',
      alt: 'CCAF logo',
      title: 'Community College of the AF',
      details: 'A.S. Business Administration',
      year: '2019',
    },
  ];

  // Fixed card size and gap
  minCardWidth = 275; // in px (fixed width of cards)
  gapSize = 25; // Space between items (in px)

  // Previous slide
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // This function will now return a fixed translation distance for consistent movement
  getTrackTransform() {
    const totalTranslate =
      this.currentIndex * (this.minCardWidth + this.gapSize);
    return `translateX(-${totalTranslate}px)`; // Move by the fixed distance
  }
}
