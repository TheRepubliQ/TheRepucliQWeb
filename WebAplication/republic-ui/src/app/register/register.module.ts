import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormGroup, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterModule { }
