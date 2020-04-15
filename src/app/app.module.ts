import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminVillesComponent } from './admin-villes/admin-villes.component';
import { AdminCinemasComponent } from './admin-cinemas/admin-cinemas.component';
import { LoginComponent } from './login/login.component';
import {JwtModule} from "@auth0/angular-jwt";
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    AdminVillesComponent,
    AdminCinemasComponent,
    LoginComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
