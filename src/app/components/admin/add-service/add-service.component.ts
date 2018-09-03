import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  public Luni7: string;
  public Luni8: string;
  private Luni9: string;
  private Luni10: string;
  public _name= this.Luni7;

  constructor() { }
  date=[
    {day:"Luni", ora7: this._name , ora8: this._name, ora9:this.Luni9, ora10:this.Luni10}
  ]
  ngOnInit() {
  }
test(){
  console.log(" mama "+ this.date[0].ora7 + "  ora  " + this.Luni7 )
}
checkboxclick()
{
  console.log( " fara object  " + this.Luni7);
}

}
