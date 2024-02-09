import { Component, EventEmitter, Output } from '@angular/core';

import { DicesValue } from 'src/models/allDataHorse';
import { HorseService } from 'src/app/horse.service';
import { Result } from 'src/models/allDataHorse';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Output() public margin: EventEmitter<Result> = new EventEmitter<Result>();

  constructor(public horseService: HorseService) {}

  public result: Result = {
    milageRed: 0,
    milageGreen: 0,
    milageBlue: 0,
    totalMileage: 0,
    counter: 0,
  };

  public showResult(data: DicesValue): void {
    this.result.milageRed = this.horseService.countMileage(
      this.result.milageRed,
      data.diceRed
    );

    this.result.milageGreen = this.horseService.countMileage(
      this.result.milageGreen,
      data.diceGreen
    );

    this.result.milageBlue = this.horseService.countMileage(
      this.result.milageBlue,
      data.diceBlue
    );

    this.margin.emit(this.result);

    if (data.diceRed === 0) {
      this.result.totalMileage = 0;
      this.result.counter = 0;
      return;
    }

    this.result.totalMileage = this.horseService.countTotalMileage(
      this.result.totalMileage,
      data
    );

    this.result.counter = this.horseService.increment(this.result.counter);
  }
}
