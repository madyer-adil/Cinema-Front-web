import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import {LoginComponent} from "./login/login.component";
import {AdminVillesComponent} from "./admin-villes/admin-villes.component";
import {AdminCinemasComponent} from "./admin-cinemas/admin-cinemas.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";


const routes: Routes = [
  { path: "cinema", component: CinemaComponent },
  { path: "login", component: LoginComponent },
  { path: "adminVilles", component: AdminVillesComponent },
  { path: "adminCinemas", component: AdminCinemasComponent },
  { path: "adminUsers", component: AdminUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
