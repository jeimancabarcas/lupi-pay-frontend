import { afterNextRender, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-receipts',
  imports: [ TableModule, ButtonModule, PaginatorModule, InputTextModule, FloatLabelModule, TagModule, IconFieldModule, InputIconModule,
    ToggleButtonModule, 
    FormsModule,
    SelectButtonModule,
    DatePickerModule
   ],
  templateUrl: './receipts.html',
  styleUrl: './receipts.css'
})
export class Receipts {

  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
  paymentOptions: any[] = [
    { name: 'Today', value: 1 },
    { name: 'Yesterday', value: 2 },
    { name: 'Last 7 days', value: 3 },
    { name: 'Last 30 days', value: 4 },
  ];

  movements = [
    {
      id: 'PRU00000017',
      reference: '1234567890',
      amount: 100,
      status: 'Declined',
      statusColor: 'danger',
      user: 'John Doe',
      bank: 'Bank of America',
      email: 'john.doe@example.com',
      creationDate: '2021-01-01'
    },
    {
      id: 'PRU00000018',
      reference: '1234567891',
      amount: 100,
      status: 'Pending',
      statusColor: 'warn',
      user: 'John Doe',
      bank: 'Bank of America',
      email: 'john.doe1@example.com',
      creationDate: '2021-01-01'
    },
    {
      id: 'PRU00000019',
      reference: '1234567890',
      amount: 100,
      status: 'Success',
      statusColor: 'success',
      user: 'John Doe',
      bank: 'Bank of America',
      email: 'john.doe2@example.com',
      creationDate: '2021-01-01'
    }
  ];

}
