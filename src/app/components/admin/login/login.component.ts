import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { User } from '../../../shared/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private rout:Router,
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
    eroareGlobalaLogin: string
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
    var gotResult = false;
      this.userService.getUser().subscribe(data => {
        data.forEach(item => {
          if (!gotResult) {
            if(this.loginInputEmail==item.email && this.loginInputPassword==item.password){
              localStorage.setItem('id', item.id);
              this.rout.navigate(['company']);
              gotResult=true;
  
            } else if (this.loginInputEmail==item.email && this.loginInputPassword!=item.password) {
              this.eroareGlobalaLogin="User and password is invalid";
              gotResult=true;
  
            } else if(this.loginInputEmail!=item.email && this.loginInputPassword!=item.password){
              this.eroareGlobalaLogin ="This account does not exist. Please register";
              this.secondMessage = false;

            }
          }
        });
      });
  }
  CreateUser(){
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
       this.reset();
  }
  reset(){
    this.createInputName="";
    this.createInputEmail="";
    this.createInputPassword="";
    this.loginInputEmail="";
    this.loginInputPassword="";
  }
  manageForms(login: boolean, register: boolean, reset: boolean): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }

 
}