import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { Reservations } from '../shared/reservations';
import {ApiConnectionService} from '../services/api-connection.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  form = new FormGroup({
    food: new FormControl('lamb'),
  });

  closeResult: string;
  public personalData = true;
    public calendarData = false;
    public sentData = false;
    public myData=["Monday","Tuesday", "Wednesday","Thursday","Friday", "Saturday", "Sunday"]
    private name : string;
    private email : string;
    private phone : string;
    private time : string;
    private day : string;
    private availability : string;

  ngOnInit(){}
  constructor(private userService: ApiConnectionService,
              private modalService: NgbModal) {
  }
  open(content) {
    this.manageForms(true,false,false);
    this.modalService.open(content, {size:'lg', centered: true}).result.then((result) => {
    }, (reason) => {});
    
  }

  nextButton() {
    this.manageForms(false, false, true);
  }
  send(){
    this.manageForms(false, true, false);
    this.availability= this.day.substring(0, 3)+","+ this.time;
    console.log("substr", this.availability);
    var addreservations = {
      id: localStorage.getItem('id-servicent-clie'),
      name: this.name,
      email : this.email,
      phone : this.phone,
      availability :  this.availability,
      idservice : localStorage.getItem('id-service-client'),
      idcompany : localStorage.getItem('id-company-client')
      };
    this.userService.addReservations(  addreservations as any).subscribe();
    // window.location.reload();
  }
  manageForms(_personalData : boolean, _sentData: boolean, _calendarData: boolean): void {
    this.personalData = _personalData;
    this.sentData = _sentData;
    this.calendarData = _calendarData;
  }



}
