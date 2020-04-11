import { Component, OnInit } from '@angular/core';
import {AppAdminService} from "../services/app-admin.service";

@Component({
  selector: 'app-admin-villes',
  templateUrl: './admin-villes.component.html',
  styleUrls: ['./admin-villes.component.css']
})
export class AdminVillesComponent implements OnInit {
  villes;
  constructor(private appAdminService:AppAdminService) { }

  ngOnInit(): void {
    this.appAdminService.getAllVilles()
      .subscribe(data=>{
        this.villes = data;
      },err=>{
        console.log(err);
      });
  }

}
