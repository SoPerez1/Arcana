import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarotCard } from './tarot-card/tarot-card';
import { NgIf } from '@angular/common';
import { IntroCardComponent } from './intro-card/intro-card';
import { FortuneCatalogo} from "./fortune-catalogo/fortune-catalogo";
import { Carrusel } from "./carrusel/carrusel";
import { Grids } from "./grids/grids";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarotCard, NgIf, IntroCardComponent, FortuneCatalogo, Carrusel, Grids],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('Arcana');
  showMessage = true;
  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
  printCarrusel = false;
  onScroll() {
    this.printCarrusel = window.scrollY > 200;
  }
}

