import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogin(data) {
    this.authService.login(data).subscribe(
      resp =>{
        let jwt = resp.headers.get('Autorization');
        this.authService.saveToken(jwt);
      } ,
      err => {
        console.log(err);
      });
  }

}
