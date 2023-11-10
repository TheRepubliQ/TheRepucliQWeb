import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { SecurityModule } from '../security/security.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecurityModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    RouterModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterModule { }
