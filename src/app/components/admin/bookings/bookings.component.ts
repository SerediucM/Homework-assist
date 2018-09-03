import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }
  myData=[
    {name: 'maria marinescu', email:'masdaasdfsdgfsdgfwsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'paul marinescu', email:'masdafwsdgsdsdgsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'petru marinescu', email:'masdafwsdgdfgdfgdfgsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'paula marinescu', email:'masdafwsddsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' },
    {name: 'denis marinescu', email:'masdafwsddgdfgdgdfgdfgdsfedfdf', phone: '0745967835',availability:'Mon, 10:00 - 11:00' }
  ]
  ngOnInit() {
  }

}
