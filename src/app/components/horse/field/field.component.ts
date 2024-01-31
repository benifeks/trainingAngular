import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataHorse } from 'src/models/allDataHorse';
import { DataField } from 'src/models/allDataHorse';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Input() dataHorse: DataHorse;
  @Output() outRun = new EventEmitter<any>();

  dataField: DataField = {
    dice: { runRed: 1, runGreen: 1, runBlue: 1 },
    dataRun: { red: 0, green: 0, blue: 0, reset: false, counter: 0 },
    marginHorses: {
      marginLeftRed: '',
      marginLeftGreen: '',
      marginLeftBlue: '',
    },
  };

  increment() {
    this.dataField.dataRun.counter++;
  }

  rollTheDice() {
    this.dataField.dataRun.reset = false;
    this.increment();

    this.dataField.dice.runRed = Math.floor(Math.random() * 6) + 1;
    this.dataField.dice.runGreen = Math.floor(Math.random() * 6) + 1;
    this.dataField.dice.runBlue = Math.floor(Math.random() * 6) + 1;

    this.dataField.dataRun.red = this.dataField.dice.runRed;
    this.dataField.dataRun.green = this.dataField.dice.runGreen;
    this.dataField.dataRun.blue = this.dataField.dice.runBlue;
  }

  outData() {
    this.rollTheDice();
    this.outRun.emit(this.dataField.dataRun);
    this.moveHorses();
  }

  reset() {
    this.dataField.dice.runRed = 1;
    this.dataField.dice.runGreen = 1;
    this.dataField.dice.runBlue = 1;
    this.dataField.dataRun.reset = true;
    this.dataField.dataRun.counter = 0;

    this.outRun.emit(this.dataField.dataRun);
    this.moveHorses();
  }

  moveHorses() {
    this.dataField.marginHorses.marginLeftRed = `${
      this.dataHorse.mileageRed * 5
    }px`;
    this.dataField.marginHorses.marginLeftGreen = `${
      this.dataHorse.mileageGreen * 5
    }px`;
    this.dataField.marginHorses.marginLeftBlue = `${
      this.dataHorse.mileageBlye * 5
    }px`;
  }
}
