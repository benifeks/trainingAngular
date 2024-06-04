import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, InfoUser, Column } from 'src/models/usersModels';
import { PeriodicElement } from 'src/models/usersModels';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UsersService {
  private link: string = 'https://randomuser.me/api';
  public infoUser: InfoUser;
  public someUsers: InfoUser[] = [];
  public showButtonsSort: boolean = false;
  public columns: Column[] = [
    {
      icon: 'swap_calls',
      columnName: 'First name',
      id: 'firstName',
    },
    {
      icon: 'swap_calls',
      columnName: 'Last name',
      id: 'lastName',
    },
    {
      icon: 'swap_calls',
      columnName: 'Gender',
      id: 'gender',
    },
    {
      icon: 'swap_calls',
      columnName: 'Age',
      id: 'age',
    },
    {
      icon: 'swap_calls',
      columnName: 'Email',
      id: 'email',
    },
    {
      icon: 'swap_calls',
      columnName: 'City',
      id: 'city',
    },
    {
      icon: 'swap_calls',
      columnName: 'Country',
      id: 'country',
    },
  ];

  public angularTableUsers: PeriodicElement[] = [];
  dataSource = new MatTableDataSource(this.angularTableUsers);

  public constructor(private http: HttpClient) {}

  public addUser(): Observable<User> {
    return this.http.get<User>(this.link)
      .pipe(
        tap((user: User) => {
          this.someUsers.push({
            id: user.info.seed,
            lastName: user.results[0].name.last,
            firstName: user.results[0].name.first,
            pictureLarge: user.results[0].picture.large,
            age: user.results[0].dob.age,
            gender: user.results[0].gender,
            details: {
              email: user.results[0].email,
              phone: user.results[0].phone,
              country: user.results[0].location.country,
              city: user.results[0].location.city,
              medium: user.results[0].picture.medium,
              thumbnail: user.results[0].picture.thumbnail,
            },
          });
          this.addUserForAngulaTable();
        })
    );
  }

  public getUserDetails(id: string) {
    return this.someUsers.find((user: InfoUser) => user.id === id);
  }

  public setStartArrows(): void {
    this.columns.forEach((arrow) => {
      arrow.icon = 'swap_calls';
    });
  }

  public sort(column: Column, ascending: number, descending: number): void {
    if (
      column.id === 'email' ||
      column.id === 'city' ||
      column.id === 'country'
    ) {
      this.someUsers.sort((a: any, b: any) =>
        a.details[column.id] > b.details[column.id] ? ascending : descending
      );
      return;
    }
    this.someUsers.sort((a: any, b: any) =>
      a[column.id] > b[column.id] ? ascending : descending
    );
  }

  public addUserForAngulaTable() {
    this.angularTableUsers = [];
    this.someUsers.forEach((user: InfoUser, i) => {
      this.angularTableUsers.push({
        position: i + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        age: user.age,
        email: user.details.email,
        city: user.details.city,
        country: user.details.country,
      });
    });
    this.dataSource.data = this.angularTableUsers;
  }
}
