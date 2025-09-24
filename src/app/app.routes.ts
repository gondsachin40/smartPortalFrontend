import { Routes } from '@angular/router';
import { Login } from './login/login';
import { App } from './app';
export const routes: Routes = [
    {path:'' , component:App},
    {path:'login' , component:Login}
];
