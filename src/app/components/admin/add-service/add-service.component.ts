import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  private startTime: string;
  private stopTime: string;
  private startDay: string;
  private stopDay: string;
  private small_description : string;
  private long_description : string;
  private availability : string;
  private spaces : string;
  private duration : string;
  private price : string;
  private key : string;
  public myData=["Monday","Tuesday", "Wednesday","Thursday","Friday", "Saturday", "Sunday"]
  constructor(private userService: ApiConnectionService,
    private rout:Router) { }
  ngOnInit() {}
  addService(){
    this.availability= this.startDay.substring(0, 3)+ "-"+ this.stopDay.substring(0, 3) +","+ this.startTime +"-" + this.stopTime;
    console.log("substr", this.availability);
    var newService = {
      id: Math.floor(Math.random()*1000),
      small_description : this.small_description,
      long_description : this.long_description,
      availability : this.availability,
      spaces : this.spaces,
      duration : this.duration,
      price : this.price,
      key : localStorage.getItem('id-company'),
      admin : localStorage.getItem('id')
      };
    this.userService.addServer( newService as any).subscribe();
    window.location.reload();
    this.rout.navigate(['dashboard']);
     
  }
}
