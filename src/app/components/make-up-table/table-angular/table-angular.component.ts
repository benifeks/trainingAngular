import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { PeriodicElement } from 'src/models/usersModels';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';

@Component({
  selector: 'app-table-angular',
  templateUrl: './table-angular.component.html',
  styleUrls: ['./table-angular.component.scss'],
})
export class TableAngularComponent implements AfterViewInit {
  @Input() public dataSource: MatTableDataSource<
    PeriodicElement,
    MatTableDataSourcePaginator
  >;

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

  public constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) private _sort: MatSort;

  public ngAfterViewInit(): void {
    this.dataSource.sort = this._sort;
  }

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      return;
    }
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
