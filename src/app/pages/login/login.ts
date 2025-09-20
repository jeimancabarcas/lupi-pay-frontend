import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, PasswordModule, FloatLabelModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
