import { Component } from '@angular/core';

import { HorseService } from 'src/app/horse.service';

import { AllResults } from 'src/models/allDataHorse';
import { DicesValue } from 'src/models/allDataHorse';

@Component({
  selector: 'app-horse-version',
  templateUrl: './horse-version.component.html',
  styleUrls: ['./horse-version.component.css'],
})
export class HorseVersionComponent {
  constructor(public horseService: HorseService) {}

  public marginLeftRed: string = `${0}px`;
  public marginLeftGreen: string = `${0}px`;
  public marginLeftBlue: string = `${0}px`;

  public allResults: AllResults = {
    milageRed: 0,
    milageGreen: 0,
    milageBlue: 0,
    totalMileage: 0,
    counter: 0,
    arrayMarginValue: [
      this.marginLeftRed,
      this.marginLeftGreen,
      this.marginLeftBlue,
    ],
  };

  public updateResults(data: DicesValue): void {
    this.allResults.milageRed = this.horseService.countMileage(
      this.allResults.milageRed,
      data.diceRed
    );
    this.allResults.milageGreen = this.horseService.countMileage(
      this.allResults.milageGreen,
      data.diceGreen
    );
    this.allResults.milageBlue = this.horseService.countMileage(
      this.allResults.milageBlue,
      data.diceBlue
    );

    this.marginLeftRed = `${this.allResults.milageRed * 5}px`;
    this.marginLeftGreen = `${this.allResults.milageGreen * 5}px`;
    this.marginLeftBlue = `${this.allResults.milageBlue * 5}px`;

    this.allResults.arrayMarginValue = this.horseService.createArrayMargin(
      this.allResults.arrayMarginValue,
      this.marginLeftRed,
      this.marginLeftGreen,
      this.marginLeftBlue
    );

    if (data.diceRed === 0) {
      this.allResults.totalMileage = 0;
      this.allResults.counter = 0;
      return;
    }

    this.allResults.totalMileage = this.horseService.countTotalMileage(
      this.allResults.totalMileage,
      data
    );

    this.allResults.counter = this.horseService.increment(
      this.allResults.counter
    );
  }
}
