import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { InfoUser, PeriodicElement, User } from 'src/models/usersModels';
import { UsersService } from 'src/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { linkUser } from './on-side';
import { HttpClient } from '@angular/common/http';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-make-up-table',
  templateUrl: './make-up-table.component.html',
  styleUrls: ['./make-up-table.component.scss'],
})
export class MakeUpTableComponent extends BaseComponent {
  public showButtonsSort: boolean = false;
  public users: InfoUser[] = [];
  public myTableUsers: InfoUser[] = [];
  public angularTableUsers: PeriodicElement[] = [];
  public dataSource = new MatTableDataSource(this.angularTableUsers);

  public constructor(
    private _usersService: UsersService,
    private _http: HttpClient
  ) {
    super();
  }

  private _getUser(link: string): Observable<User> {
    return this._http.get<User>(link);
  }

  public receiveNewUser(): void {
    this._getUser(linkUser)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((user: User) => {
        this.users = [
          ...this.users,
          ...[this._usersService.addUserForMyTable(user)],
        ];
        this.myTableUsers = [...this.users];
        this.angularTableUsers = this._usersService.addUserForAngularTable(
          this.myTableUsers
        );
        this.dataSource.data = this.angularTableUsers;
        if (this.myTableUsers.length > 1) this.showButtonsSort = true;
      });
  }

  public clearAllUsers(): void {
    this.users = [];
    this.myTableUsers = [];
    this.angularTableUsers = [];
    this.dataSource.data = [];
    this.showButtonsSort = false;
  }
}
