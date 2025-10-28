import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { DrawerModule } from 'primeng/drawer';
import { PopoverModule } from 'primeng/popover';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Breadcrumb, DrawerModule, PopoverModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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
