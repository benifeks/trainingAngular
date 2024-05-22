import { Component } from '@angular/core';

import { UsersService } from 'src/services/users.service';
import { Column } from 'src/models/usersModels';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public ascending: boolean = true;
  public constructor(public usersService: UsersService) {}

  public changeArrow(column: Column): void {
    this.usersService.setStartArrows();
    if (this.ascending) {
      this.usersService.sort(column, 1, -1);
      this.ascending = !this.ascending;
      column.icon = 'south';
      return;
    }

    if (!this.ascending) {
      this.usersService.sort(column, -1, 1);
      this.ascending = !this.ascending;
      column.icon = 'north';
      return;
    }
  }
}
