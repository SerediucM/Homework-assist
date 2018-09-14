import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private userService: ApiConnectionService,
    private rout:Router) { }

    private idcompany : string;
    reservations: {};
  ngOnInit() {
  }
  ngAfterViewInit():void {
    this.userService.getReservations().subscribe(data => {
      this.idcompany = localStorage.getItem('id-company');
      console.log("key  ", this.idcompany);
      this.reservations = data;
      console.log("data dashboard", data);
    })
  }
}
