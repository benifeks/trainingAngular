import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  Column,
  DataTable,
  User,
  SimpleUser,
} from 'src/models/makeUpTableModels';

@Injectable()
export class MakeUpTableService {
  public constructor(public http: HttpClient) {}

  public prepareUsers(
    arrayData: Array<User>
  ): Array<SimpleUser> {
    return arrayData.map((elem: any, i: number) => {
      return {
        firstName: arrayData[i].profile.name.split(' ')[0],
        lastName: arrayData[i].profile.name.split(' ')[1],
        sex: ' - ',
        age: new Date().getFullYear() - +arrayData[i].profile.dob.split('-')[0],
        email: arrayData[i].email,
        phone: ' - ',
        company: arrayData[i].profile.company,
      };
    });
  }

  public setImgColumns(arr: DataTable): Array<Column> {
    let keysCollumns = Object.keys(arr.wholeTable[0]);
    return keysCollumns.map((key: string, i: number) => {
      return {
        imgUrl: 'doubleArrow',
        id: `imgBtn${i}`,
        column: key,
      };
    });
  }
}
