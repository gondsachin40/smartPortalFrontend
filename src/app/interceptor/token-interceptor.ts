import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../../services/user';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userservice = inject(User);
  const token = userservice.getToken();;
  console.log('hello');
  return next(req);
};
