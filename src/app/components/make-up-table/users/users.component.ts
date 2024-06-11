import { Component, Input } from '@angular/core';
import { InfoUser } from 'src/models/usersModels';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() public users: InfoUser[];
  private _user: InfoUser;

  public constructor(private _dialog: MatDialog) {}

  public openDialog(userId: string): void {
    this._user = this.users.filter((curretUser: InfoUser) => curretUser.id === userId)[0];

    const dialogRef = this._dialog.open(DetailsComponent, {
      data: this._user,
    });
  }
}
