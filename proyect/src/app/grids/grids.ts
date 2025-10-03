import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grids',
  imports: [CommonModule],
  templateUrl: './grids.html',
  styleUrl: './grids.css'
})
export class Grids {
 cards = [
    { name: 'El Mago', class: 'a' },
    { name: 'La Emperatriz', class: 'b' },
    { name: 'La Luna', class: 'c' },
    { name: 'La Estrella', class: 'd' },
    { name: 'Bienvenido a Arcana', class: 'e' }
  ];
}
