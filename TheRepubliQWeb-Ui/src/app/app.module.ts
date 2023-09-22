import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AlterarSenhaComponent } from './layout/alterar-senha/alterar-senha.component';
import { CadastrarUsuarioComponent } from './layout/cadastrar-usuario/cadastrar-usuario.component';
import { ListarResidenciasComponent } from './layout/listar-residencias/listar-residencias.component';
import { AlterarPerfilComponent } from './layout/alterar-perfil/alterar-perfil.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { RegistrarMoradiaComponent } from './layout/registrar-moradia/registrar-moradia.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlterarSenhaComponent,
    CadastrarUsuarioComponent,
    ListarResidenciasComponent,
    AlterarPerfilComponent,
    HomeComponent,
    LoginComponent,
    RegistrarMoradiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
