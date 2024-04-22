import { Component, Input } from '@angular/core';

import { CardValues } from 'src/app/models/black-jackModels';

@Component({
  selector: 'app-cards-player',
  templateUrl: './cards-player.component.html',
  styleUrls: ['./cards-player.component.css'],
})
export class CardsPlayerComponent {
  @Input() public showCardsPlayer: CardValues[];
}
