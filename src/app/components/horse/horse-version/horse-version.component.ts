import { Component, OnInit } from '@angular/core';

import { HorseService } from 'src/app/services/horse.service';

import { AllResults, DicesValue } from 'src/app/models/allDataHorse';

@Component({
  selector: 'app-horse-version',
  templateUrl: './horse-version.component.html',
  styleUrls: ['./horse-version.component.css'],
})
export class HorseVersionComponent implements OnInit {
  public allResults: AllResults = {
    milageRed: 0,
    milageGreen: 0,
    milageBlue: 0,
    totalMileage: 0,
    counter: 0,
    arrayMarginValue: [],
    dicesValues: [],
  };

  public ngOnInit(): void {
    this.allResults.arrayMarginValue = [
      `${this.allResults.milageRed}px`,
      `${this.allResults.milageGreen}px`,
      `${this.allResults.milageBlue}px`,
    ];

    this.allResults.dicesValues = [1, 1, 1];
  }

  public constructor(public horseService: HorseService) {}

  public updateResults(dicesValue: DicesValue): void {
    this.allResults.dicesValues = Object.values(dicesValue);

    this.allResults.milageRed = this.horseService.countMileage(
      this.allResults.milageRed,
      dicesValue.diceRed
    );
    this.allResults.milageGreen = this.horseService.countMileage(
      this.allResults.milageGreen,
      dicesValue.diceGreen
    );
    this.allResults.milageBlue = this.horseService.countMileage(
      this.allResults.milageBlue,
      dicesValue.diceBlue
    );

    this.allResults.arrayMarginValue = [
      `${this.allResults.milageRed * 5}px`,
      `${this.allResults.milageGreen * 5}px`,
      `${this.allResults.milageBlue * 5}px`,
    ];

    if (dicesValue.diceRed === 0) {
      this.allResults.totalMileage = 0;
      this.allResults.counter = 0;
      this.allResults.dicesValues = [1, 1, 1];
      return;
    }

    this.allResults.totalMileage = this.horseService.countTotalMileage(
      this.allResults.totalMileage,
      dicesValue
    );

    this.allResults.counter = this.horseService.increment(
      this.allResults.counter
    );
  }
}
