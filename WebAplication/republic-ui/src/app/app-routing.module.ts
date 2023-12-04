import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { HomeListComponent } from './homepage/home-list/home-list.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { HomeViewComponent } from './homepage/home-view/home-view.component';
import { HomeRegisterComponent } from './homepage/home-register/home-register.component';
import { HomeAlterComponent } from './homepage/home-alter/home-alter.component';
import { InterestComponent } from './interest/interest/interest.component';
import { InterestOwnerComponent } from './interest/interest-owner/interest-owner.component';
import { HomeOwnerComponent } from './homepage/home-owner/home-owner.component';
import { InterestContactsComponent } from './interest/interest-contacts/interest-contacts.component';

const routes: Routes = [
  { path: 'home', component: HomeListComponent  },                     // Rota padrão (Home page)
  { path: 'login', component: LoginFormComponent },                    // Rota para o formulário de login
  { path: 'registro', component: RegisterFormComponent },              // Rota para o formulário de registro
  { path: 'homeView/:id', component: HomeViewComponent },              // Rota para listar casa selecionada
  { path: 'homeRegister', component: HomeRegisterComponent},           // Rota para registrar moradia
  { path: 'homeAlter/:id', component: HomeAlterComponent},             // Rota para alterar dados da moradia
  { path: 'myHomes', component: HomeOwnerComponent},                   // Rota para moradias do proprietário
  { path: 'interest', component: InterestComponent},                   // Rota para listar os interesses
  { path: 'interestOwner', component: InterestOwnerComponent},         // Rota para listar casas com interesses
  { path: 'interestList/:id', component: InterestContactsComponent},   // Rota para listar pessoas interessadas na casa
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
