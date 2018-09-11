import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../../shared/company';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-make-bookings',
  templateUrl: './make-bookings.component.html',
  styleUrls: ['./make-bookings.component.css']
})
export class MakeBookingsComponent implements OnInit {

  private idclient : string;
  name: string;
  description: string;
  servises: {};

  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }
  ngOnInit() {
  }
  ngAfterViewInit():void {
    this.userService.getService().subscribe(data => {
      this.idclient = localStorage.getItem('id-company-client');
      this.servises = data;
    })
    this.userService.getCompanys().subscribe(data => {
      this.idclient = localStorage.getItem('id-company-client');
      
      for( var item of data)
      {
        console.log(data);
        if(item.id == this.idclient)
        {
          this.name= item.name;
          this.description= item.description;
        }
      }
      
    })
    
  }


}
