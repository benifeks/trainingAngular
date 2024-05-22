import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/services/users.service';
import { User } from 'src/models/usersModels';
import { InfoUser } from 'src/models/usersModels';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public infoUser: InfoUser;
  public userSubcription: Subscription;
  public constructor(public usersService: UsersService) {}

  public getRandomUser() {
    this.usersService.setStartArrows();
    this.usersService.getUser().subscribe((user: User) => {
      this.usersService.someUsers.push({
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
      this.usersService.addUserForAngulaTable();

      if (this.usersService.someUsers.length > 1) {
        this.usersService.showButtonsSort = true;
      }
    });
  }

  public deleteUsers() {
    this.usersService.someUsers = [];
    this.usersService.showButtonsSort = false;
    this.usersService.setStartArrows();
    this.usersService.addUserForAngulaTable();
  }

  public ngOnDestroy() {
    if (this.userSubcription) this.userSubcription.unsubscribe();
  }
}
