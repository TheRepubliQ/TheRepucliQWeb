import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeListComponent,
    HomeRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    HomeListComponent,
    HomeRegisterComponent
  ]
})
export class HomepageModule { }
