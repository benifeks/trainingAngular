import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HorseService } from 'src/app/services/horse.service';
import { AllResults, DicesValue } from 'src/app/models/allDataHorse';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
})
export class DiceComponent {
  @Output() dicesDrop: EventEmitter<DicesValue> =
    new EventEmitter<DicesValue>();
  @Input() allResults: AllResults;

  public constructor(public horseService: HorseService) {}

  public rollTheDice(startValue?: number): void {
    let dicesValue: DicesValue = this.horseService.rollTheDice(startValue);
    this.dicesDrop.emit(dicesValue);
  }
}
