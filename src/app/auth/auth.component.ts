import { Component } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MainToolbarComponent } from '../shared/components/main-toolbar/main-toolbar.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, MainToolbarComponent],
  // imports: [RouterModule, LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
