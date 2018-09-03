import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  companyName:string;
  public file: File;
  constructor() { }

  ngOnInit() {
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    this.file = files[0];
    console.log(this.file);

    if (files && this.file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    binaryString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
