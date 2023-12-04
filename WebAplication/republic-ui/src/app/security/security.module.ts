import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token', 'http://localhost:8080/registrar',"http://localhost:8080/home","http://localhost:8080/home/filter", "http://localhost:8080/home/:id"]
      }
    })
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    JwtHelperService
  ]
})
export class SecurityModule { }
