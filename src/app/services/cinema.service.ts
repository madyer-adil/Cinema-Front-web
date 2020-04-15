import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string = "http://localhost:8087";
  constructor(private http:HttpClient,private authenticationService:AuthenticationService) { }

  public getVilles(){
    return this.http.get(this.host+"/villes") ;
  }
  public getCinemas(v){
    return this.http.get(v._links.cinemas.href) ;
  }
  getSalles(c){
    return this.http.get(c._links.salles.href) ;
  }
  getProjrction(salle) {
    let url = salle._links.projections.href.replace("{?projection}","")
    return this.http.get(url + "?projection=p1") ;
  }
  getTicketsPlace(p) {
    let url = p._links.tickets.href.replace("{?projection}","")
    return this.http.get(url + "?projection=ticketProj") ;
  }
  payerTickets(dataForm) {
    return this.http.post(this.host +  "/payerTickets",dataForm,
      {headers:new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt})}) ;
  }
}
