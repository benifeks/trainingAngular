export interface User {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: [
    {
      gender: string;
      name: {
        title: string;
        first: string;
        last: string;
      };
      location: {
        street: {
          number: number;
          name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
          latitude: string;
          longitude: string;
        };
        timezone: {
          offset: string;
          description: string;
        };
      };
      email: string;
      login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
      };
      dob: {
        date: string;
        age: number;
      };
      registered: {
        date: string;
        age: number;
      };
      phone: string;
      cell: string;
      id: {
        name?: string;
        value?: any;
      };
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
      nat: string;
    }
  ];
}

export interface InfoUser {
  id: string;
  lastName: string;
  firstName: string;
  pictureLarge: string;
  age: number;
  gender: string;
  details: Details;
}

export interface Details {
  email: string;
  phone: string;
  country: string;
  city: string;
  medium: string;
  thumbnail: string;
}

export interface Column {
  icon: string;
  columnName: string;
  id: string;
}

export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  email: string;
  city: string;
  country: string;
}
