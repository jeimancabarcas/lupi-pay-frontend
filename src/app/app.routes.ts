import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [ 
    {
        path: '',
        component: Home,
        loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'login',
        component: Login
    }
];
