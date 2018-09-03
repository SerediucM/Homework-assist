import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userConn: ApiConnectionService) { }

  ngOnInit() {
  }

}
