
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor {
  // cards = [
  //   {
  //     message: 'General Medicine',
  //     name: 'Drew White',
  //     role: 'Comprehensive diagnosis and treatment of common illnesses, infections, and systemic conditions with a focus on long-term health and early intervention.',
  //     avatar: './icon-1.png',
  //     bgColor:'#588157'
  //   },
  //   {
  //     message: 'Preventive Health Management',
  //     name: 'Brendan McDonald',
  //     role: 'Health screenings, routine check-ups, and risk assessments designed to detect conditions early and promote proactive wellness.',
  //     avatar: './icon-2.png',
  //     bgColor:'#0077B6'
  //   },
  //   {
  //     message: 'Diabetology',
  //     name: 'Amber Stone',
  //     role: 'Expert management of diabetes and related complications through clinical evaluation, lifestyle counselling, and ongoing support.',
  //     avatar: './icon-3.png',
  //     bgColor: '#735D78'
  //   }
  //   ,
  //   {
  //     message: 'Lifestyle- related Conditions',
  //     name: 'Amber Stone',
  //     role: 'Targeted care for conditions like obesity, hypertension, and thyroid disorders - rooted in personalized plans for sustainable health improvements.',
  //     avatar: './icon-4.png',
  //     bgColor:'#E29578'
  //   }
  // ];
  
  // visibleCards = [this.cards[0]];
  // currentIndex = 0;
  // direction: 'next' | 'prev' = 'next';
  
  // next() {
  //   this.direction = 'next';
  //   const nextIndex = (this.currentIndex + 1) % this.cards.length;
  //   this.visibleCards = [this.cards[this.currentIndex], this.cards[nextIndex]];
  //   setTimeout(() => {
  //     this.currentIndex = nextIndex;
  //     this.visibleCards = [this.cards[this.currentIndex]];
  //   }, 600);
    
  // }
  
  // prev() {
  //   this.direction = 'prev';
  //   const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  //   this.visibleCards = [this.cards[this.currentIndex], this.cards[prevIndex]];
  //   setTimeout(() => {
  //     this.currentIndex = prevIndex;
  //     this.visibleCards = [this.cards[this.currentIndex]];
  //   }, 600);
  // }
  
  cards = [
    { title: 'Comment Card 1', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'Comment Card 2', content: 'Vestibulum gravida porta nec...' },
    { title: 'Comment Card 3', content: 'Donec nunc ligula, vulputate quis...' },
    { title: 'Comment Card 4', content: 'Vivamus facilisis ultricies eros...' }
  ];

  currentIndex = 0;
  previousIndex: number | null = null;
  lastIndex: number | null = null;

  onCardClick(index: number) {
    if (index !== this.currentIndex) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index;
    }
  }
  clickNext() {
    this.lastIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }  
  // getCardClass(index: number): string {
  //   if (index === this.currentIndex) return 'card--current card';
  //   if (index === this.previousIndex) return 'card--out card';
  //   if (index === this.currentIndex + 1 || (this.currentIndex === this.cards.length - 1 && index === 0)) {
  //     return 'card--next card';
  //   }
  //   return 'card';
  // }
  getCardClass(index: number): string {
    if (index === this.currentIndex) return 'card card--in'; // animate IN
    if (index === this.lastIndex) return 'card card--below'; // quietly step down
    return 'card card--hidden'; // all others stay out of sight
  }
  
  
}

