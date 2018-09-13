import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Custom } from '../../../shared/custom';
import { Reservations } from '../../../shared/reservations';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  private idclient : string;
  private idcompany : string;
  private optionServices : string;
  private idservice: number;
  Services: {};
  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }
    myService: Array<Custom> = []; 
    reservations: Array<Reservations> = [];
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
      this.idcompany = localStorage.getItem('id-company');
      for( var item of data){
      if(this.idclient == item.admin && this.idcompany== item.key )
      { let customObj = new Custom();
        customObj.name = item.small_description;
        customObj.id = item.id; 
        this.Services = item;
        this.myService.push(customObj);
      }
    }
    })
  }
  select(){
    console.log("lenhth",this.reservations.length )
    for( var item=0;item<=this.reservations.length*100; item++){
      this.reservations.pop() ;
    }
    this.selectoption();
  }
  selectoption(){
       for(var item of this.myService)
    {
      if(item.name== this.optionServices)
        this.idservice= item.id;
    }
    this.userService.getReservations().subscribe(data => {
      for( var itemm of data){
        if(itemm.idservice ==  this.idservice){
          this.reservations.push(itemm) ;
         
        }
      } console.log("aicii", this.reservations)
    })
    }
 
}
