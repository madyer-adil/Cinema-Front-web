import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(data) {
    this.authService.login(data).subscribe(
      resp =>{
        let jwt = resp.headers.get('authorization');
        console.log(jwt);
        console.log(resp.headers);
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/cinema");
      } ,
      err => {
        console.log(err);
      });
  }

}
