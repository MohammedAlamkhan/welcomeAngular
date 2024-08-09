import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  
  cards = [
    {
      route: 'places',
      imageSrc: './assets/skyline.jpg',
      title: 'Vibrant Metropolis',
      description: 'Vibrant metropolis, Lights and colors intertwine, Mumbai never sleeps.',
      loadingMessage: 'Loading Designer Handbag page...'
    },
    {
      route: 'culinary',
      imageSrc: './assets/vadapav.jpg',
      title: 'Culinary Delights',
      description: 'Spices fill the air, Street stalls sizzle, flavors burst, Mumbai\'s feast delights.',
      loadingMessage: 'Loading Designer Handbag page...'
    },
    {
      route: 'shopping',
      imageSrc: './assets/mall.png',
      title: 'Shopping',
      description: 'Gleaming storefronts shine, Fashion\'s heart in Mumbai\'s streets, Elegance abounds.',
      loadingMessage: 'Loading Private Jet page...'
    },
    {
      route: 'streetshopping',
      imageSrc: './assets/streetshopping.jpg',
      title: 'Street Shopping',
      description: 'Bazaars hum with life, Colors, trinkets, deals to find, Mumbai\'s streets, a trove.',
      loadingMessage: 'Loading Private Jet page...'
    }
  ];


  constructor(private router: Router) {}

  ngAfterViewInit() {
  }

  navigate(route: string, event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const cardElement = clickedElement.closest('app-card');
    
    if (cardElement) {
      cardElement.classList.add('flipping');
      
      // Wait for the animation to complete before navigating
      setTimeout(() => {
        this.router.navigate([route]);
      }, 600); // Match this with your animation duration
    }
  }
}
