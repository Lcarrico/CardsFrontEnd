import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Learner } from 'src/app/models/learner';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string) {
    const learner:Learner = new Learner(0,username,password);
    const details={
      body:JSON.stringify(learner)
    }
    return this.http.post<{
      access_token:string}>('http://34.122.220.146:8080/login', details)
        .pipe(tap(res => {localStorage.setItem('access_token', res.access_token);
    }))
  }

  register(username:string,password:string) {
    const learner:Learner = new Learner(0,username,password);
    const details={
      body:JSON.stringify(learner)
    }
    return this.http.post<{
      access_token:string}>('http://34.122.220.146:8080/login/register',details)
        .pipe(tap(res => {learner.username,learner.password}))
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

}


