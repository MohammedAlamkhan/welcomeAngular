import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CardComponent, NgForOf],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
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

  
  navigate(route:string) {
    this.router.navigate([route]);
  }
}
