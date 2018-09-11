import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
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


  ngOnInit(){}
  constructor(private modalService: NgbModal) {
  }
  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
}

  open(content) {
    this.manageForms(true,false,false);
    this.modalService.open(content, {size:'lg', centered: true}).result.then((result) => {
    }, (reason) => {
    });
  }

  nextButton() {
    this.manageForms(false, false, true);
  }
  send(){

    this.manageForms(false, true, false);
  }
  manageForms(_personalData : boolean, _sentData: boolean, _calendarData: boolean): void {
    this.personalData = _personalData;
    this.sentData = _sentData;
    this.calendarData = _calendarData;
  }



}
