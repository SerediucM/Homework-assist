import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { User } from '../shared/admin'; 
import { Company } from '../shared/company';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  urlCompany = 'http://localhost:3000/company';

  getUser(): Observable<any>
 {
  const url = `${this.url}`;
  return this.http.get<User>(url + '/users');
 }
 getCompany(): Observable<any>
 {
  const url = `${this.urlCompany}`;
  return this.http.get<Company>(url );
 }
 addUser(user: User): Observable<User>{
  const urlP = `${this.url}`;
   return this.http.post<User>(urlP + '/users', user);
 }
 putUpdate(company: Company): Observable<any> {
  // postCategorie(categorie : any): Observable<any> {
  //   const token = sessionStorage.getItem("resetToken");
  //   const httpGetOptions1 = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'reset_token': token
  //     })
  //   };
    // console.log("Update token service", token);
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this. urlCompany}/${id}`;
    return this.http.put<any>(url ,company);
  }
  deleteCompany( company: Company | number): Observable <Company>{
    const id = typeof company === 'number' ? company : company.id;
    const url =  `${this. urlCompany}/${id}`;
    console.log("am ajuns in server", id);
    return this.http.delete<Company>(url );
  } 
  addServer( company:Company): Observable<Company>{
    const urlP = `${this. urlCompany}`;
     return this.http.post<Company>(urlP , company);
   }
}
