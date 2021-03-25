import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Learner } from 'src/app/models/learner';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwtToken:string=""
  decodedToken:{[key:string]:string}={}
  // private jwtCookie = {}

  constructor(private http:HttpClient) { }

  // async login(learner:Learner):Promise<string> {
  //   return await this.http.post<string>('http://34.122.220.146:8080/login', learner, {responseType: "text" as "json"}).toPromise();
  // }

  async login(learner:Learner):Promise<string>{
    try{
      this.jwtToken = await this.http.post<string>('http://34.122.220.146:8080/login', learner, {responseType: "text" as "json"}).toPromise();
      this.setJwtCookie("Authorization",this.jwtToken)
      console.log(jwt_decode(this.jwtToken))
      return jwt_decode(this.jwtToken);
      
    }catch(Error){
      return "Error"
    };
    
  }

  async register(learner:Learner):Promise<string> {
    try{
      learner = await this.http.post<Learner>('http://34.122.220.146:8080/learners',learner).toPromise();
      return this.login(learner)
    }catch(Error){
      return "Error"
    }
  }

  setJwtCookie(key:string,value:string){
    document.cookie = key+'='+(value||'');
  }

  removeJwtCookie(key:string){
    document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
  }

  decodeToken(){
    this.jwtToken = this.getJwtFromCookie()
    if(this.jwtToken){
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getUsername():string{
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.username : "";
  }

  getUserId():number{
    this.decodeToken();
    return this.decodedToken ? parseInt(this.decodedToken.id) : 0;
  }

  getJwtFromCookie():string{
    const cookies=document.cookie
    // this.jwtCookie = {};
    if(!!cookies === false){return "NO COOKIE FOR YOU!"}
    const cookiesArr = cookies.split(';');
    for(const cookie of cookiesArr){
      const cookieArr = cookie.split('=');
      const key = cookieArr[0].trim()
      const jwt = cookieArr[1].trim()
      if(key=="Authorization"){return jwt}
    }
    return "There is no JWT cookie"
  }
  
  logOut() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    this.jwtToken=""
    this.decodedToken={}
  }
}


