import { Injectable } from '@angular/core';
import { User, InfoUser, PeriodicElement } from 'src/models/usersModels';
import { columns } from 'src/app/components/make-up-table/on-side';

@Injectable()
export class UsersService {
  
  public addUserForMyTable(user: User): InfoUser {
    return {
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
    };
  }

  public addUserForAngularTable(users: InfoUser[]): PeriodicElement[] {
    let angularTableUsers: PeriodicElement[] = [];
    users.forEach((user: InfoUser, i) => {
      angularTableUsers.push({
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
    return angularTableUsers;
  }

  public setStartArrows(): void {
    columns.forEach((arrow) => {
      arrow.icon = 'swap_calls';
    });
  }
}
