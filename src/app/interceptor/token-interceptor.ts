import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../../services/user';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userservice = inject(User);
  const token = userservice.getToken();
  console.log('interceptor chala');
  console.log('here' , token);
   const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  return next(authReq);

};
