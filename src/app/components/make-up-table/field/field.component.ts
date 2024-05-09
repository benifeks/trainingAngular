import { Component, Input } from '@angular/core';

import {
  ButtonsArrows,
  Column,
  SelectedColumn,
  SimpleUser,
} from 'src/models/makeUpTableModels';
import { MakeUpTableService } from 'src/services/make-up-table.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Input() wholeTable: Array<SimpleUser>;
  @Input() imgButtons: Array<Column>;
  @Input() showSortButtons: boolean;
  @Input() buttonsArrows: ButtonsArrows;
  ascending = true;

  public constructor(public makeUpTableService: MakeUpTableService) {}

  public changeArrow(event: any, column: string): void {
    let selectedColumn: SelectedColumn = {
      idColumn: event.target.id,
      nameColumn: column,
    };

    this.sortColumn(selectedColumn);
  }

  public sortColumn(currentColumn: SelectedColumn): void {
    if (this.ascending) {
      this.wholeTable.sort((a: any, b: any) =>
        a[currentColumn.nameColumn] > b[currentColumn.nameColumn] ? 1 : -1
      );
      this.ascending = !this.ascending;
      this.imgButtons.forEach((img) => {
        if (currentColumn.idColumn === img.id) {
          img.imgUrl = this.buttonsArrows.downArrow;
          return;
        }
        img.imgUrl = this.buttonsArrows.doubleArrow;
      });
      return;
    }

    if (!this.ascending) {
      this.wholeTable.sort((a: any, b: any) =>
        a[currentColumn.nameColumn] < b[currentColumn.nameColumn] ? 1 : -1
      );
      this.ascending = !this.ascending;
      this.imgButtons.forEach((img) => {
        if (currentColumn.idColumn === img.id) {
          img.imgUrl = this.buttonsArrows.upArrow;
          return;
        }
        img.imgUrl = this.buttonsArrows.doubleArrow;
      });
      return;
    }
  }
}
