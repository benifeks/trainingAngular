import { Column } from 'src/models/usersModels';

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

export const linkUser: string = 'https://randomuser.me/api';