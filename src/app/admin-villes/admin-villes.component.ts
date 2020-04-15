import { Component, OnInit } from '@angular/core';
import {AppAdminService} from "../services/app-admin.service";

@Component({
  selector: 'app-admin-villes',
  templateUrl: './admin-villes.component.html',
  styleUrls: ['./admin-villes.component.css']
})
export class AdminVillesComponent implements OnInit {
  villes;
  mode;
  currentVille;

  constructor(private appAdminService:AppAdminService) { }

  ngOnInit(): void {
    this.onGetAllVilles();
  }
  onGetAllVilles(){
    this.appAdminService.getAllVilles()
      .subscribe(data=>{
        this.villes = data;
      },err=>{
        console.log(err);
      });
  }

  onDeleteVille(v) {
    let c = confirm('vous etes sure?')
    if(!c) return;
    this.appAdminService.deleteRessouce(v._links.self.href)
      .subscribe(data=>{
        this.onGetAllVilles();
      },err=>{
        console.log(err);
      });
  }

  OnAddVille() {
    if (this.mode != 'new-ville')
      this.mode = 'new-ville';
    else
      this.mode='';
  }

  onSaveVille(data) {
    let url = this.appAdminService.host+"/villes";
    this.appAdminService.postRessouce(url,data)
      .subscribe(data => {
        this.onGetAllVilles();
        this.mode = '';
      },err => {
        console.log(err);
      });
  }

  onEditVille(v) {
    this.appAdminService.getRessouce(v._links.self.href)
      .subscribe(data=>{
        this.currentVille = data;
        this.mode='edit-ville';
      },err=>{
        console.log(err);
      });
  }

  onUpdateVille(data) {
    this.appAdminService.putRessouce(this.currentVille._links.self.href,data)
      .subscribe(data => {
        this.onGetAllVilles();
        this.mode = '';
      },err => {
        console.log(err);
      });
  }
}
