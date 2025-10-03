import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.css'],
})
export class Carrusel implements OnInit {
  actualIndex: number = 0;

  cards = [
    { nombre: 'Empress', img: 'assets/cards/empress.jpg' },
    { nombre: 'Chariot', img: 'assets/cards/chariot.jpg' },
    { nombre: 'Hermit', img: 'assets/cards/hermit.jpg' },
    { nombre: 'Templance', img: 'assets/cards/templance.jpg' },
    { nombre: 'Page of Cups', img: 'assets/cards/page-of-cups.jpg' },
    { nombre: 'Knight of Cups', img: 'assets/cards/knight-of-cups.jpg' }
  ];

  ngOnInit() {
    setInterval(() => {
      this.actualIndex = (this.actualIndex + 1) % this.cards.length;
    }, 3000); // cambia de carta cada 3 segundos
  }
}
