import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppAdminService {
  public host:String="http://localhost:8087";
  constructor( private http : HttpClient) { }

  getAllVilles(){
    return this.http.get(this.host+"/villes");
  }
  getRessouce(url){
    return this.http.get(url);
  }
}
