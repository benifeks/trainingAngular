import { Component } from '@angular/core';

import { HorseService } from 'src/app/horse.service';
import { Result } from 'src/models/allDataHorse';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  constructor(public horseService: HorseService) {}

  public marginLeftRed: string = `${0}px`;
  public marginLeftGreen: string = `${0}px`;
  public marginLeftBlue: string = `${0}px`;

  public arrayMarginValue: string[] = [
    this.marginLeftRed,
    this.marginLeftGreen,
    this.marginLeftBlue,
  ];

  public updateMargin(margin: Result): void {
    this.marginLeftRed = `${margin.milageRed * 5}px`;
    this.marginLeftGreen = `${margin.milageGreen * 5}px`;
    this.marginLeftBlue = `${margin.milageBlue * 5}px`;

    this.arrayMarginValue = this.horseService.createArrayMargin(
      this.arrayMarginValue,
      this.marginLeftRed,
      this.marginLeftGreen,
      this.marginLeftBlue
    );
  }
}
