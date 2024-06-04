import { Component, Input } from '@angular/core';

import { UsersService } from 'src/services/users.service';
import { Column } from 'src/models/usersModels';
import { setStartArrows, columns, sort } from '../on-side';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public showButtonsSort: boolean;
  public ascending: boolean = true;
  public columns = columns;

  public constructor(public usersService: UsersService) {}

  public changeArrow(column: Column): void {
    setStartArrows();
    if (this.ascending) {
      sort(this.usersService.someUsers, column, 1, -1);
      this.ascending = !this.ascending;
      column.icon = 'south';
      return;
    }

    sort(this.usersService.someUsers, column, -1, 1);
    this.ascending = !this.ascending;
    column.icon = 'north';
  }
}
