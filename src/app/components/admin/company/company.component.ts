import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../../shared/company';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }

    private idclient : string;
    Companys: {};
  ngOnInit() {
  }
  ngAfterViewInit():void {
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
    localStorage.setItem('id-company', company.id);
    this.rout.navigate(['dashboard']);

  }
}
