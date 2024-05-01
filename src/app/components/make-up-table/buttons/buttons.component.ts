import { Component, EventEmitter, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ObjectFromServer } from 'src/models/makeUpTableModels';
import { MakeUpTableService } from 'src/services/make-up-table.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() dataFromServer: EventEmitter<ObjectFromServer[]> = new EventEmitter<
    ObjectFromServer[]
  >();
  constructor(
    public makeUpTableService: MakeUpTableService,
    public http: HttpClient
  ) {}

  public linkToTableData: string =
    'https://api.json-generator.com/templates/AOzpFb4MT-L4/data?access_token=ryfovnlaptwhbvtlwhfhqeb987cruq4lstsry1bd';

  public getHttpData(): void {
    this.http.get(this.linkToTableData).subscribe((response) => {
      this.outInTable(response);
    });
  }

  public outInTable(data: any): void {
    this.dataFromServer.emit(data);
  }
}
