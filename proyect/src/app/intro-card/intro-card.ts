import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.html',
  styleUrls: ['./intro-card.css']
})
export class IntroCardComponent {
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
