import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MakeUpTableService } from 'src/services/make-up-table.service';

import {
  ButtonsArrows,
  Column,
  SimpleUser,
} from 'src/models/makeUpTableModels';

@Component({
  selector: 'app-make-up-table',
  templateUrl: './make-up-table.component.html',
  styleUrls: ['./make-up-table.component.css'],
})
export class MakeUpTableComponent {
  public linkToTableData: string =
    'https://api.json-generator.com/templates/AOzpFb4MT-L4/data?access_token=ryfovnlaptwhbvtlwhfhqeb987cruq4lstsry1bd';
  public wholeTable: Array<SimpleUser> = [];
  public imgButtons: Array<Column> = [];
  public showSortButtons: boolean = false;
  public buttonsArrows: ButtonsArrows = {
    doubleArrow: 'doubleArrow',
    upArrow: 'upArrow',
    downArrow: 'downArrow',
  };

  public constructor(
    public makeUpTableService: MakeUpTableService,
    private http: HttpClient
  ) {}

  public showData(activator: boolean): void {
    this.imgButtons.forEach(
      (arrow) => (arrow.imgUrl = this.buttonsArrows.doubleArrow)
    );

    if (!activator) {
      this.showSortButtons = activator;
      this.wholeTable = [];
      return;
    }

    this.http.get(this.linkToTableData).subscribe((response) => {
      this.wholeTable = this.makeUpTableService.prepareUsers(response);
      this.imgButtons = this.makeUpTableService.setImgColumns(this.wholeTable);
      this.showSortButtons = activator;
    });
  }
}
