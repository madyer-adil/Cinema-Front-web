import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AppAdminService {
  public host:String="http://localhost:8087";

  constructor( private http : HttpClient,private authenticationService:AuthenticationService ) { }

  getAllVilles(){
    return this.http.get(this.host+"/villes");
  }
  getRessouce(url){
    return this.http.get(url);
  }
  deleteRessouce(url){
    return this.http.delete(url,
      {headers:new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt})});
  }
  postRessouce(url,data){
    return this.http.post(url,data,
      {headers:new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt})});
  }

  putRessouce(url, data) {
    return this.http.patch(url,data,
      {headers:new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt})});
  }
}
