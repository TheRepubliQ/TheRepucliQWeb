import { NgModule } from '@angular/core';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { SecurityModule } from '../security/security.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { HomeViewComponent } from './home-view/home-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { HomeAlterComponent } from './home-alter/home-alter.component';

@NgModule({
  declarations: [
    HomeListComponent,
    HomeRegisterComponent,
    HomeViewComponent,
    HomeAlterComponent
  ],
  imports: [
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
    HomeListComponent,
    HomeRegisterComponent,
    HomeViewComponent,
    HomeAlterComponent
  ]
})
export class HomepageModule { }
