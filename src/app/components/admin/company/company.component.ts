import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private userService: ApiConnectionService,
    private rout:Router) { }

    private idclient : string;
    Companys: {};

  ngOnInit() {}
  ngAfterViewInit():void {
    localStorage.setItem('id-company', '0');
    this.userService.getCompanys().subscribe(data => {
      this.idclient = localStorage.getItem('id');
      this.Companys = data;
    })
  }
  new_company(){
    this.rout.navigate(['account']);
  }
  open(company){
    localStorage.setItem('id-company', company.id);
    this.rout.navigate(['dashboard']);

  }
}
