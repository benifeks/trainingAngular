import { Injectable } from '@angular/core';

@Injectable()
export class HorseService {
  public setCurrentDices(value: number, valueStart?: number): number {
    if (valueStart || valueStart === 0) {
      return valueStart;
    }

    return Math.floor(Math.random() * 6) + 1;
  }

  public createArrayMargin(
    arrayOfValues: string[],
    value_1: string,
    value_2: string,
    value_3: string
  ): string[] {
    arrayOfValues = [];
    return [...arrayOfValues, value_1, value_2, value_3];
  }

  public createArrayDices(
    arrayOfValues: number[],
    value_1: number,
    value_2: number,
    value_3: number
  ): number[] {
    arrayOfValues = [];
    return [...arrayOfValues, value_1, value_2, value_3];
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
