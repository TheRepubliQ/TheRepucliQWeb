import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarSenhaComponent } from './layout/alterar-senha/alterar-senha.component';
import { CadastrarUsuarioComponent } from './layout/cadastrar-usuario/cadastrar-usuario.component';
import { ListarResidenciasComponent } from './layout/listar-residencias/listar-residencias.component';
import { AlterarPerfilComponent } from './layout/alterar-perfil/alterar-perfil.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { RegistrarMoradiaComponent } from './layout/registrar-moradia/registrar-moradia.component';

const routes: Routes = [
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'listar-residencias', component: ListarResidenciasComponent },
  { path: 'alterar-perfil', component: AlterarPerfilComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-moradia', component: RegistrarMoradiaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão redirecionada para 'home'
  { path: '**', redirectTo: '/home' }, // Redireciona para 'home' se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
