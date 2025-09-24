import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { App } from './app';
import { Home } from './home/home';
import { Create } from './create/create';
import { Questions } from './create/questions/questions';
export const routes: Routes = [
    { path: '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home },
    {path : 'create', component : Create, 
        children : [
            {
                path : 'questions' , component : Questions
            }
        ]
    }
];
