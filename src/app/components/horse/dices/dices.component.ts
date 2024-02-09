import { Component, EventEmitter, Output } from '@angular/core';

import { DicesValue } from 'src/models/allDataHorse';
import { HorseService } from 'src/app/horse.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.css'],
})
export class DicesComponent {
  @Output() public dicesDrop: EventEmitter<DicesValue> =
    new EventEmitter<DicesValue>();

  constructor(public horseService: HorseService) {}

  public dicesValue: DicesValue = {
    diceRed: 1,
    diceGreen: 1,
    diceBlue: 1,
  };

  public arrayDicesValue: number[] = [
    this.dicesValue.diceRed,
    this.dicesValue.diceGreen,
    this.dicesValue.diceBlue,
  ];

  public rollTheDice(): void {
    this.dicesValue.diceRed = this.horseService.setCurrentDices(
      this.dicesValue.diceRed
    );
    this.dicesValue.diceGreen = this.horseService.setCurrentDices(
      this.dicesValue.diceGreen
    );
    this.dicesValue.diceBlue = this.horseService.setCurrentDices(
      this.dicesValue.diceBlue
    );

    this.arrayDicesValue = this.horseService.createArrayDices(
      this.arrayDicesValue,
      this.dicesValue.diceRed,
      this.dicesValue.diceGreen,
      this.dicesValue.diceBlue
    );

    this.dicesDrop.emit(this.dicesValue);
  }

  public setStartDice(): void {
    this.dicesValue.diceRed = this.horseService.setCurrentDices(
      this.dicesValue.diceRed,
      0
    );
    this.dicesValue.diceGreen = this.horseService.setCurrentDices(
      this.dicesValue.diceGreen,
      0
    );
    this.dicesValue.diceBlue = this.horseService.setCurrentDices(
      this.dicesValue.diceBlue,
      0
    );

    this.arrayDicesValue = this.horseService.createArrayDices(
      this.arrayDicesValue,
      this.dicesValue.diceRed + 1,
      this.dicesValue.diceGreen + 1,
      this.dicesValue.diceBlue + 1
    );

    this.dicesDrop.emit(this.dicesValue);
  }
}
