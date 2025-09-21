import { Home } from "./home";
import { Dashboard } from "./pages/dashboard/dashboard";

export const homeRoutes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'pay-in',
        loadComponent: () => import('./pages/pay-in/pay-in').then(m => m.PayIn)
    },
    {
        path: 'pay-out',
        loadComponent: () => import('./pages/pay-out/pay-out').then(m => m.PayOut)
    },
    {
        path: 'receipts',
        loadComponent: () => import('./pages/receipts/receipts').then(m => m.Receipts)
    }
];