import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginFormComponent } from './security/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Rota padrão (Home page)
  { path: 'login', component: LoginFormComponent } // Rota para o formulário de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
