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

export interface SelectedColumn {
  idColumn: string;
  nameColumn: string;
}

export interface ButtonsArrows {
  doubleArrow: string;
  upArrow: string;
  downArrow: string;
}
