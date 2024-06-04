import { InfoUser, Column, User } from 'src/models/usersModels';
import { PeriodicElement } from 'src/models/usersModels';
import { MatTableDataSource } from '@angular/material/table';

export const columns: Column[] = [
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
export let angularTableUsers: PeriodicElement[] = [];
export let dataSource = new MatTableDataSource(angularTableUsers);

export function addUser(user: User): InfoUser {
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

export function setStartArrows(): void {
  columns.forEach((arrow) => {
    arrow.icon = 'swap_calls';
  });
}

export function sort(
  usersArray: InfoUser[],
  column: Column,
  ascending: number,
  descending: number
): void {
  if (
    column.id === 'email' ||
    column.id === 'city' ||
    column.id === 'country'
  ) {
    usersArray.sort((a: any, b: any) =>
      a.details[column.id] > b.details[column.id] ? ascending : descending
    );
    return;
  }
  usersArray.sort((a: any, b: any) =>
    a[column.id] > b[column.id] ? ascending : descending
  );
}

export function addUserForAngularTable(users: InfoUser[]): PeriodicElement[] {
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
