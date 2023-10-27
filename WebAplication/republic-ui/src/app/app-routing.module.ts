import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { HomeListComponent } from './homepage/home-list/home-list.component';

const routes: Routes = [
  { path: 'homepage', component: HomeListComponent  }, // Rota padrão (Home page)
  { path: 'login', component: LoginFormComponent }, // Rota para o formulário de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
