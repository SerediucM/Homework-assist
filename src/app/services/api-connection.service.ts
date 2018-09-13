import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { User } from '../shared/admin'; 
import { Service } from '../shared/Service';
import { Company } from '../shared/company';
import { Reservations } from '../shared/reservations';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  urlService = 'http://localhost:3000/Service';

  getUser(): Observable<any>
 {
  const url = `${this.url}`;
  return this.http.get<User>(url + '/users');
 }
 getService(): Observable<any>
 {
  const url = `${this.urlService}`;
  return this.http.get<Service>(url );
 }
 getCompanys():Observable<any>
 {
  const url = `${this.url}`;
  return this.http.get<Service>(url + '/company' );
 }
 addUser(user: User): Observable<User>{
  const urlP = `${this.url}`;
   return this.http.post<User>(urlP + '/users', user);
 }
 putUpdate(Service: Service): Observable<any> {
    const id = typeof Service === 'number' ? Service : Service.id;
    const url = `${this. urlService}/${id}`;
    return this.http.put<any>(url ,Service);
  }
  editCompany(Company: Company): Observable<any> {
    const id = typeof Company === 'number' ? Company : Company.id;
    const url = `${this. url}/${'company'}/${id}`;
    return this.http.put<any>(url ,Company);
  }
  deleteService( Service: Service | number): Observable <Service>{
    const id = typeof Service === 'number' ? Service : Service.id;
    const url =  `${this. urlService}/${id}`;
    console.log("am ajuns in server", id);
    return this.http.delete<Service>(url );
  } 
  addServer( Service:Service): Observable<Service>{
    const urlP = `${this. urlService}`;
     return this.http.post<Service>(urlP , Service);
   }
   addCompany( comp:Company): Observable<Company>{
    const urlP = `${this. url}`;
     return this.http.post<Company>(urlP + "/company" , comp);
   }
   getReservations():Observable<any>
   {
    const url = `${this.url}`;
    return this.http.get<Reservations>(url + '/rezervations' );
   }
   addReservations( reservations:Reservations): Observable<Reservations>{
    const urlP = `${this. url}`;
     return this.http.post<Reservations>(urlP + "/rezervations", reservations);
   }
}
