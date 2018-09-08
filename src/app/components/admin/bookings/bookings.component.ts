import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../../../shared/Service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  private idclient : string;
  Services: {};
  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }
  myData=[
    {name: 'maria marinescu', email:'masdaasdfsdgfsdgfwsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'paul marinescu', email:'masdafwsdgsdsdgsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'petru marinescu', email:'masdafwsdgdfgdfgdfgsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'paula marinescu', email:'masdafwsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'denis marinescu', email:'masdafwsddgdfgdgdfgdfgdsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' }
  ]
  ngOnInit() {
  }
  ngAfterViewInit():void {
    this.userService.getService().subscribe(data => {
      this.idclient = localStorage.getItem('id');
      console.log("key  ", this.idclient);
      this.Services = data;
      console.log("data dashboard", data);
    })
    
  }
}
