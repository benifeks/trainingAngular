import { Component, EventEmitter, Output } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UsersService } from 'src/services/users.service';
import { User, InfoUser } from 'src/models/usersModels';
import { BaseComponent } from '../../base.component';
import { setStartArrows } from '../on-side';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends BaseComponent {
  @Output() sendUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() clearSomeUsers: EventEmitter<InfoUser[]> = new EventEmitter<
    InfoUser[]
  >();

  public constructor(public usersService: UsersService) {
    super();
  }

  public addRandomUser(): void {
    setStartArrows();
    this.usersService
      .getUser()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((user: User) => {
        this.sendUser.emit(user);
      });
  }

  public deleteUsers(): void {
    setStartArrows();
    this.clearSomeUsers.emit([]);
  }
}
