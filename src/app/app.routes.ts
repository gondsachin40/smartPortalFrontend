import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { App } from './app';
import { Home } from './home/home';
import { Create } from './create/create';
import { Questions } from './create/questions/questions';
import { Dashboard } from './admin/dashboard/dashboard';
import { Admin } from './admin/admin';
import { Exams } from './exams/exams';
import { Run } from './exams/run/run';
export const routes: Routes = [
    { path: '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home },
    {
        path: 'create', component: Create,
        children: [
            {
                path: 'questions', component: Questions
            }
        ]
    },
    { path: 'admin', component: Admin },
    { path: 'admin/dashboard', component: Dashboard },
    { path: 'exams', component: Exams },
    { path: 'exams/run/:id', component: Run }
];
