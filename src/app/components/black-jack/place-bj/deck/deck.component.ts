import { Component } from '@angular/core';

import { hiddenCard } from '../../variables';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent {
  public hiddenCard = hiddenCard;
  public deck: string[] = [this.hiddenCard, this.hiddenCard, this.hiddenCard];
}
