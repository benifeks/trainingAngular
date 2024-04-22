import { Injectable } from '@angular/core';

import { DicesValue } from '../models/allDataHorse';

@Injectable()
export class HorseService {
  public rollTheDice(valueStart?: number): DicesValue {
    return {
      diceRed: this.getCurrentDiceValue(valueStart),
      diceGreen: this.getCurrentDiceValue(valueStart),
      diceBlue: this.getCurrentDiceValue(valueStart),
    };
  }

  public getCurrentDiceValue(valueStart?: number): number {
    if (valueStart || valueStart === 0) {
      return 0;
    }

    return Math.floor(Math.random() * 6) + 1;
  }

  public countMileage(result: number, dataDice: number): number {
    if (dataDice === 0) {
      result = result * 0;
    }

    return (result += dataDice);
  }

  public countTotalMileage(result: number, data: any): number {
    return [result, data.diceRed, data.diceGreen, data.diceBlue].reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  }

  public increment(counter: number): number {
    return (counter += 1);
  }
}
