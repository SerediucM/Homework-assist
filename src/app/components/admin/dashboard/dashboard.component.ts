import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../../shared/company';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private idclient : string;
  private small_description : string;
  private long_description : string;
  private availability : string;
  private spaces : string;
  private duration : string;
  private prices : string;
  private key : string;
  companys: {};
  public company: Company[];
  public show: boolean = false;
  constructor(private userService: ApiConnectionService,
              private rout:Router,
              private http: HttpClient,
              private location: Location) { }

  ngOnInit() {
  }
  ngAfterViewInit():void {
    this.userService.getCompany().subscribe(data => {
      this.idclient = localStorage.getItem('id');
      console.log("key  ", this.idclient);
      this.companys = data;
      console.log("data dashboard", data);
    })
    
  }
  newService(){
    this.rout.navigate(['addservice']);
  }
  editService(comp){
    this.show = !this.show;
    this.userService.getCompany().subscribe(data => {
    localStorage.setItem('id-service', comp.id);
    for(let item of data)
    {
      if(comp.id == item.id){
        this.small_description = item.small_description;
        this.long_description = item.long_description;
        this.availability = item.availability;
        this.spaces = item.spaces;
        this.duration = item.duration;
        this.prices = item.price;
        }
      }
    })
    }
  update(){
    var updateService = {
      id: localStorage.getItem('id-service'),
      small_description : this.small_description,
      long_description : this.long_description,
      availability : this.availability,
      spaces : this.spaces,
      duration : this.duration,
      price : this.prices,
      key : localStorage.getItem('id')
      };
    this.userService.putUpdate( updateService as any).subscribe();
    localStorage.removeItem('id-service');
    window.location.reload();
    }
  delete(comp){
    localStorage.setItem('id-service', comp.id);
    this.userService.deleteCompany( comp.id ).subscribe();
    window.location.reload();
    localStorage.removeItem('id-service');
  }


}
