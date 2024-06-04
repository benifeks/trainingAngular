import { Component } from '@angular/core';

import { User, InfoUser } from 'src/models/usersModels';
import { addUser, addUserForAngularTable } from './on-side';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-make-up-table',
  templateUrl: './make-up-table.component.html',
  styleUrls: ['./make-up-table.component.scss'],
})
export class MakeUpTableComponent {
  public showButtonsSort: boolean = false;

  public constructor(public usersService: UsersService) {}

  public receiveUser(user: User): void {
    let newRandomUser: InfoUser = addUser(user);
    this.usersService.someUsers.push(newRandomUser);
    this.usersService.angularTableUsers = addUserForAngularTable(
      this.usersService.someUsers
    );
    this.usersService.dataSource.data = this.usersService.angularTableUsers;
    this.usersService.myTableUsers = this.usersService.someUsers;
    if (this.usersService.someUsers.length > 1) this.showButtonsSort = true;
  }

  public clearUsers(users: InfoUser[]): void {
    this.usersService.someUsers = users;
    this.usersService.angularTableUsers = [];
    this.usersService.dataSource.data = [];
    this.showButtonsSort = false;
  }
}
