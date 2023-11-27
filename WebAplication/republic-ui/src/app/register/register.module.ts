import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { SecurityModule } from '../security/security.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { AlterFormComponent } from './alter-form/alter-form.component';




@NgModule({
  declarations: [
    RegisterFormComponent,
    AlterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecurityModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    RouterModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterModule { }
