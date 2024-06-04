import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, InfoUser, Column } from 'src/models/usersModels';
import { PeriodicElement } from 'src/models/usersModels';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private _link: string = 'https://randomuser.me/api';
  public someUsers: InfoUser[] = [];
  public myTableUsers: InfoUser[] = [];
  public angularTableUsers: PeriodicElement[] = [];
  public dataSource = new MatTableDataSource(this.angularTableUsers);

  public constructor(private _http: HttpClient) {}

  public getUser(): Observable<User> {
    return this._http.get<User>(this._link);
  }

  public getUserDetails(id: string): InfoUser | undefined {
    return this.myTableUsers.find((user: InfoUser) => user.id === id);
  }
}
