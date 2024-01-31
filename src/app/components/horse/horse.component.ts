import { Component } from '@angular/core';
import { DataHorse } from 'src/models/allDataHorse';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css'],
})
export class HorseComponent {
  dataHorse: DataHorse = {
    nameRed: 'Red',
    nameGreen: 'Green',
    nameBlue: 'Blue',
    mileageRed: 0,
    mileageGreen: 0,
    mileageBlye: 0,
    totalMileage: 0,
    counter: 0,
  };

  applyData(data: any) {
    this.dataHorse.counter = data.counter;

    if (data.reset) {
      this.dataHorse.mileageRed = 0;
      this.dataHorse.mileageGreen = 0;
      this.dataHorse.mileageBlye = 0;
      this.dataHorse.totalMileage = 0;
      return;
    }

    this.dataHorse.mileageRed = this.dataHorse.mileageRed + data.red;
    this.dataHorse.mileageGreen = this.dataHorse.mileageGreen + data.green;
    this.dataHorse.mileageBlye = this.dataHorse.mileageBlye + data.blue;

    this.dataHorse.totalMileage = [
      this.dataHorse.totalMileage,
      data.red,
      data.green,
      data.blue,
    ].reduce((total, currentValue) => total + currentValue, 0);
  }
}
