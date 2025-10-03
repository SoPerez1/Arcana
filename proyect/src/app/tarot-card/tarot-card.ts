import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tarot-card',
  imports: [CommonModule],
  templateUrl: './tarot-card.html',
  styleUrls: ['./tarot-card.css']
})
export class TarotCard {
  cards = [
    {
      name: 'The Empress',
      upright: 'Abundance, fertility, creativity.',
      reversed: 'Creative blocks, dependence, stagnation.',
      revealed: false,
      isReversed: false
    },
    {
      name: 'The Lovers',
      upright: 'Union, major choices, true love.',
      reversed: 'Confusion, disharmony, bad choices.',
      revealed: false,
      isReversed: false
    },
    {
      name: 'The Chariot',
      upright: 'Determination, victory, control.',
      reversed: 'Lack of direction, loss of control.',
      revealed: false,
      isReversed: false
    },
    {
      name: 'The Hermit',
      upright: 'Inner wisdom, spiritual quest.',
      reversed: 'Isolation, loneliness, withdrawal.',
      revealed: false,
      isReversed: false
    },
    {
      name: 'The Tower',
      upright: 'Sudden change, revelation, necessary destruction.',
      reversed: 'Fear of change, disaster avoided.',
      revealed: false,
      isReversed: false
    },
    {
      name: 'Temperance',
      upright: 'Balance, patience, moderation.',
      reversed: 'Excess, imbalance, lack of harmony.',
      revealed: false,
      isReversed: false
    }
  ];
  flipCard(card: any) {
    card.revealed = !card.revealed;
    if (card.revealed) {
      card.isReversed = Math.random() > 0.5;
    }
  }
}
