import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { App } from './app';
import { Home } from './home/home';
export const routes: Routes = [
    { path: '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home }
];
