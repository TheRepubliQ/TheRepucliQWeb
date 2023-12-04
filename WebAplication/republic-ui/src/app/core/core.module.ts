import { AuthService } from './../security/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule,
    MenubarModule,

  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,

  ],
  providers: [
    AuthService,
    MessageService,
    ConfirmationService,
    DatePipe
  ]
})
export class CoreModule { }
