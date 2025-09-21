import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [ 
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'login',
        component: Login
    }
];
