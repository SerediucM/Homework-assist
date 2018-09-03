import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { exists } from 'fs';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult: string;
  public personalData = true;
    public calendarData = false;
    public sentData = false;
    private element: any;
  ngOnInit(){}
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.manageForms(true,false,false);
    this.modalService.open(content, {size:'lg', centered: true}).result.then((result) => {
    }, (reason) => {
      console.log("test $ "+ reason);
    });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  manageForms(_personalData : boolean, _sentData: boolean, _calendarData: boolean): void {
    this.personalData = _personalData;
    this.sentData = _sentData;
    this.calendarData = _calendarData;
  }


}
