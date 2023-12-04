import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './interest/interest.component';
import { InterestOwnerComponent } from './interest-owner/interest-owner.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SecurityModule } from '../security/security.module';
import { DataViewModule } from 'primeng/dataview';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InterestContactsComponent } from './interest-contacts/interest-contacts.component';



@NgModule({
  declarations: [
    InterestComponent,
    InterestOwnerComponent,
    InterestContactsComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SecurityModule,
    DataViewModule,
    RouterModule,
    DialogModule,
    ToastModule
  ],
  exports: [
    InterestComponent,
    InterestOwnerComponent,
    InterestContactsComponent

  ]
})
export class InterestModule { }
