import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { DrawerModule } from 'primeng/drawer';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, Breadcrumb, DrawerModule, PopoverModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  drawerVisible = false;


  menu = [
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-bar',
      route: '/dashboard'
    },
    {
      label: 'Pay In',
      icon: 'pi pi-money-bill',
      route: '/pay-in'
    },
    {
      label: 'Pay Out',
      icon: 'pi pi-money-bill',
      route: '/pay-out'
    },
    {
      label: 'Receipts',
      icon: 'pi pi-receipt',
      route: '/receipts'
    },
  ];

}
