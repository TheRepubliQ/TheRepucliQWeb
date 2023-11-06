import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { HomeListComponent } from './homepage/home-list/home-list.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { HomeViewComponent } from './homepage/home-view/home-view.component';

const routes: Routes = [
  { path: 'home', component: HomeListComponent  }, // Rota padrão (Home page)
  { path: 'login', component: LoginFormComponent }, // Rota para o formulário de login
  { path: 'registro', component: RegisterFormComponent }, // Rota para o formulário de registro
  { path: 'homeView', component: HomeViewComponent }, // Rota para o formulário de registro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
