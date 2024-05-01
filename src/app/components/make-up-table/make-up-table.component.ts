import { Component } from '@angular/core';
import { MakeUpTableService } from 'src/services/make-up-table.service';

import {
  ObjectFromServer,
  DataTable,
  OutSelectedColumn,
} from 'src/models/makeUpTableModels';

@Component({
  selector: 'app-make-up-table',
  templateUrl: './make-up-table.component.html',
  styleUrls: ['./make-up-table.component.css'],
})
export class MakeUpTableComponent {
  public dataTable: DataTable = {
    tableArrows: {
      doubleArrow: 'doubleArrow',
      upArrow: 'upArrow',
      downArrow: 'downArrow',
    },
    showSortButtons: false,
    wholeTable: [],
    imgButtons: [],
    ascending: true,
  };
  public constructor(public makeUpTableService: MakeUpTableService) {}

  public showData(data: ObjectFromServer[]): void {
    this.setStartArrows();
    if (data.length) {
      this.dataTable.showSortButtons = true;
      this.dataTable.wholeTable = this.makeUpTableService.convertData(data);
      this.dataTable.imgButtons = this.makeUpTableService.setImgColumns(
        this.dataTable
      );
      return;
    }
    this.dataTable.showSortButtons = false;
    this.dataTable.wholeTable = this.makeUpTableService.convertData(data);
  }

  public setStartArrows(): void {
    this.dataTable.imgButtons.forEach(
      (arrow) => (arrow.imgUrl = this.dataTable.tableArrows.doubleArrow)
    );
  }

  public sortColumn(currentColumn: OutSelectedColumn): void {
    if (this.dataTable.ascending) {
      this.dataTable.wholeTable.sort((a: any, b: any) =>
        a[currentColumn.nameColumn] > b[currentColumn.nameColumn] ? 1 : -1
      );
      this.dataTable.ascending = !this.dataTable.ascending;
      this.dataTable.imgButtons.forEach((img) => {
        if (currentColumn.idColumn === img.id) {
          img.imgUrl = this.dataTable.tableArrows.downArrow;
          return;
        }
        img.imgUrl = this.dataTable.tableArrows.doubleArrow;
      });
      return;
    }

    if (!this.dataTable.ascending) {
      this.dataTable.wholeTable.sort((a: any, b: any) =>
        a[currentColumn.nameColumn] < b[currentColumn.nameColumn] ? 1 : -1
      );
      this.dataTable.ascending = !this.dataTable.ascending;
      this.dataTable.imgButtons.forEach((img) => {
        if (currentColumn.idColumn === img.id) {
          img.imgUrl = this.dataTable.tableArrows.upArrow;
          return;
        }
        img.imgUrl = this.dataTable.tableArrows.doubleArrow;
      });
      return;
    }
  }
}
