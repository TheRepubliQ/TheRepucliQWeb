import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SecurityModule } from './security/security.module';
import { AuthService } from './security/auth.service';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './homepage/homepage.module';
import { RegisterModule } from './register/register.module';
import { InterestModule } from './interest/interest.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    HomepageModule,
    RegisterModule,
    InterestModule,
    CoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
