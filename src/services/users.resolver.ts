import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from './users.service';

export const usersResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
) => {
  const usersService = inject(UsersService);
  return usersService.getUserDetails(route.params?.['id']);
};
