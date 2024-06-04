import { Component } from '@angular/core';
import { pipe, Subscription, takeUntil, tap } from 'rxjs';
import { UsersService } from 'src/services/users.service';
import { User } from 'src/models/usersModels';
import { InfoUser } from 'src/models/usersModels';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends BaseComponent {
  public constructor(public usersService: UsersService) {
    super();
  }

  public addRandomUser() {
    this.usersService.setStartArrows();
    this.usersService.addUser()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((user: User) => {
        if (this.usersService.someUsers.length > 1) {
          this.usersService.showButtonsSort = true;
        }
      });
  }

  public deleteUsers() {
    this.usersService.deleteAllUsers();
    // this.usersService.showButtonsSort = false;
    // this.usersService.setStartArrows();
    // this.usersService.addUserForAngulaTable();
  }
}
