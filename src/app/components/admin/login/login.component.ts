import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { User } from '../../../shared/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private router: ActivatedRoute ,
              private rout:Router,
              private location: Location,
              private userService: ApiConnectionService) { }
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
    private loginInputEmail: string;
    private loginInputPassword: string;
    private createInputName: string;
    private createInputEmail: string;
    private createInputPassword: string;
    secondMessage:boolean = true;
    checkVerify:boolean=false;
    err: string;
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
    var gotResult = false;
      this.userService.getUser().subscribe(data => {
        data.forEach(item => {
          if (!gotResult) {
            if(this.loginInputEmail==item.email && this.loginInputPassword==item.password){
              console.log("Citire db", item.id );
              localStorage.setItem('id', item.id);
              console.log("Citire localStorage", localStorage.getItem('id') );
              this.rout.navigate(['company']);
              gotResult=true;
  
            } else if (this.loginInputEmail==item.email && this.loginInputPassword!=item.password) {
              this.err="User and password is invalid";
              gotResult=true;
  
            } else if(this.loginInputEmail!=item.email && this.loginInputPassword!=item.password){
              this.err ="This account does not exist. Please register";
              this.secondMessage = false;
              //gotResult=true;
            }
          }
        });
      });
  }
  CreateUser(){
    console.log("Merge click");
    this.checkVerify=true;
      var userr ={
        id: Math.floor(Math.random()*1000) ,
        name : this.createInputName,
        email : this.createInputEmail,
        password : this.createInputPassword
      };
       this.userService.addUser(userr as User).subscribe(data=>{
       })
       this.manageForms(true,false,false)
  }
  manageForms(login: boolean, register: boolean, reset: boolean): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }

 
}