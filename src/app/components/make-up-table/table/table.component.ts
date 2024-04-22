import { Component, Input } from '@angular/core';

import { UsersService } from 'src/services/users.service';
import { Column, InfoUser } from 'src/models/usersModels';
import { columns } from '../on-side';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public showButtonsSort: boolean;
  @Input() public myTableUsers: InfoUser[];
  public ascending: boolean = true;
  public columns = columns;

  public constructor(private _usersService: UsersService) {}

  private _sort(
    usersArray: InfoUser[],
    column: Column,
    ascending: number,
    descending: number
  ): void {
    if (
      column.id === 'email' ||
      column.id === 'city' ||
      column.id === 'country'
    ) {
      usersArray.sort((a: any, b: any) =>
        a.details[column.id] > b.details[column.id] ? ascending : descending
      );
      return;
    }
    usersArray.sort((a: any, b: any) =>
      a[column.id] > b[column.id] ? ascending : descending
    );
  }

  public changeArrow(column: Column): void {
    this._usersService.setStartArrows();
    if (this.ascending) {
      this._sort(this.myTableUsers, column, 1, -1);
      this.ascending = !this.ascending;
      column.icon = 'south';
      return;
    }

    this._sort(this.myTableUsers, column, -1, 1);
    this.ascending = !this.ascending;
    column.icon = 'north';
  }
}
