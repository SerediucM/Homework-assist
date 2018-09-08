import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../../services/api-connection.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../../../shared/Service';
import { Company } from '../../../shared/company';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  companyName:string;
  public file: File;
  private idcompany : string;
  companys: {};
  private description : string;
  private name : string;
  private logo: string;
  public fileslogo:File;

  constructor(private userService: ApiConnectionService,
    private rout:Router,
    private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
  }
  ngAfterViewInit():void {
    this.userService.getCompanys().subscribe(data => {
      this.idcompany = localStorage.getItem('id-company');
      for(let item of data)
      {
        console.log("data ", );
        if(this.idcompany == item.id){
          console.log("data ", data);
          this.name = item.name;
          this.description = item.description;
          this.logo = item.logo;
        }
      }
    }) 
  }
  save(){
    var editCompany = {
      id: localStorage.getItem('id-company'),
      name : this.name,
      description : this.description,
      logo : this.file,
      admin : localStorage.getItem('id')
      };
      this.userService.editCompany(editCompany as any).subscribe();
      window.location.reload();
  }
  logout(){
    localStorage.removeItem('id');
    localStorage.removeItem('id-service');
    localStorage.removeItem('id-company');
    this.rout.navigate(['login']);
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
      this.fileslogo= this.file
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    binaryString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
  
}
