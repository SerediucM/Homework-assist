import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ApiConnectionService} from '../../../services/api-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userConn: ApiConnectionService) { }
  @ViewChild('login') loginForm: NgForm;
  @ViewChild('reset') resetForm: NgForm;
  @ViewChild('create') createForm: NgForm;
  ngOnInit(): void {
    }
    public showHide = true;
    public showHidecreate = true;
    public loginContent = true;
    public resetContent = false;
    public registerContent = false;
  showMyPass(pass) {
    this.showHide = !(this.showHide);
    console.log("this showhide:", this.showHide);
  }
  showMyPassCreate(){
    this.showHidecreate = !(this.showHidecreate);
    console.log("this showHidecreate:", this.showHidecreate);
  }
  loginUser(){
    console.log("Merge button LOGIN");
  }
  manageForms(login: boolean, register: boolean, reset: boolean): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }
 
}