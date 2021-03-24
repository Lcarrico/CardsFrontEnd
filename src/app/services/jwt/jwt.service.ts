import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Learner } from 'src/app/models/learner';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http:HttpClient) { }

  async login(learner:Learner):Promise<string> {
    return await this.http.post<string>('http://34.122.220.146:8080/login', learner, {responseType: "text" as "json"}).toPromise();
  }

  async register(learner:Learner):Promise<Learner> {
    return await this.http.post<Learner>('http://34.122.220.146:8080/learners',learner).toPromise();
  }

  // logout() {
  //   document.cookie.replace
  // }

  // public get loggedIn(): boolean{
  //   return localStorage.getItem('access_token') !==  null;
  // }

}


