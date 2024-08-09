import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() route!: string;
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() loadingMessage: string = 'Loading...';
}
