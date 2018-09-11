import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../../shared/company';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-client',
  templateUrl: './company-client.component.html',
  styleUrls: ['./company-client.component.css']
})
export class CompanyClientComponent implements OnInit {

  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }

    private idclient : string;
    Companys: {};
  ngOnInit() {
  }
  ngAfterViewInit():void {
    localStorage.setItem('id-company', '0');
    this.userService.getCompanys().subscribe(data => {
      this.idclient = localStorage.getItem('id');
      console.log("key  ", this.idclient);
      this.Companys = data;
      console.log("data comapny ", data);
    })
  }
  new_company(){
    console.log("aici uuton");
    this.rout.navigate(['account']);
  }
  open(company){
    console.log("company " , company.name);
    localStorage.setItem('id-company-client', company.id);
    this.rout.navigate(['makebooking']);

  }

}
