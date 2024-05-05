export interface User {
  id: string;
  email: string;
  roles: string[];
  apiKey: string;
  profile: {
    dob: string;
    name: string;
    about: string;
    address: string;
    company: string;
    location: {
      lat: number;
      long: number;
    };
  };
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface SimpleUser {
  firstName: string;
  lastName: string;
  sex: string;
  age: number;
  email: string;
  phone: string;
  company: string;
}

export interface Column {
  imgUrl: string;
  id: string;
  column: string;
}

export interface DataTable {
  tableArrows: {
    doubleArrow: string;
    upArrow: string;
    downArrow: string;
  };
  showSortButtons: boolean;
  wholeTable: Array<SimpleUser>;
  imgButtons: Array<Column>;
  ascending: boolean;
}

export interface OutSelectedColumn {
  idColumn: string;
  nameColumn: string;
}
