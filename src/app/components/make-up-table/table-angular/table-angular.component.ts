import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-table-angular',
  templateUrl: './table-angular.component.html',
  styleUrls: ['./table-angular.component.scss'],
})
export class TableAngularComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'gender',
    'age',
    'email',
    'city',
    'country',
  ];

  public constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public usersService: UsersService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  public ngAfterViewInit(): void {
    this.usersService.dataSource.sort = this.sort;
  }

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
