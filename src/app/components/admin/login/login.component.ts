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
    public showHideConfirmReset = true;
    public showHideReset = true;
    public loginContent = true;
    public resetContent = false;
    public registerContent = false;
    private loginInputEmail: string;
    private loginInputPassword: string;
    private createInputName: string;
    private resetInputConfirmPassword: string;
    private resetInputPassword: string;
    private resetInputEmail: string;
    private createInputEmail: string;
    private createInputPassword: string;
    secondMessage:boolean = true;
    checkVerify:boolean=false;
    eroareGlobalaLogin: string;
    eroareGlobalReset:string;
    err: string;

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
  ResetPassword(){
    var gotResult = false;
    this.userService.getUser().subscribe(data => {
      data.forEach(item => {
        if (!gotResult) {
          if(this.resetInputEmail==item.email ){
            if(this.resetInputPassword==this.resetInputConfirmPassword){
              var userreset ={
                id:item.id ,
                name : item.name,
                email : item.email,
                password :this.resetInputConfirmPassword
              };
              this.userService.ResetUser(userreset as User).subscribe(data=>{
              })
             this.manageForms(true, false, false);
             this.reset();
              gotResult=true;
            }else if (this.resetInputPassword!=this.resetInputConfirmPassword) {
              this.eroareGlobalReset="Password not match";
              gotResult=true;
            }
          }else if(this.resetInputEmail != item.emaild){
            this.eroareGlobalReset ="This email does not exist. Please register";
          }
        }
      });
    });
  }
  reset(){
    this.createInputName="";
    this.createInputEmail="";
    this.createInputPassword="";
    this.loginInputEmail="";
    this.loginInputPassword="";
    this.resetInputConfirmPassword="";
    this.resetInputPassword="";
  }
  manageForms(login: boolean, register: boolean, reset: boolean): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }
  showMyPass(pass) {
    this.showHide = !(this.showHide);
  }
  showMyPassreset(pass){
    this.showHideReset = !(this.showHideReset);
  }
  showMyConfirmReset(pass){
    this.showHideConfirmReset = !(this.showHideConfirmReset);
  }
  showMyPassCreate(){
    this.showHidecreate = !(this.showHidecreate);
  }

 
}