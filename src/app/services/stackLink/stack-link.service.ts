import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StackLink } from '../../models/stackLink';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class StackLinkService {
  
  jwt:string = this.jwtService.getJwtFromCookie()
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };
  
  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  async getAllStackLinks(){
    const stackLinks:StackLink[] = await this.http.get<StackLink[]>(`http://34.122.220.146:8080/stackLinks`,this.httpOptions).toPromise();
    return stackLinks;
  }

  async getStackLinkById(stackId:number){
    const stackLink:StackLink = await this.http.get<StackLink>(`http://34.122.220.146:8080/stackLinks/${stackId}`,this.httpOptions).toPromise();
    return stackLink;
  }

  async getStackLinksByLearnerId(learnerId:number):Promise<StackLink[]>{
    const stackLinks:StackLink[] = await this.http.get<StackLink[]>(`http://34.122.220.146:8080/stackLinks?learnerId=${learnerId}`,this.httpOptions).toPromise();
    return stackLinks;
  }

  async createStackLink(stackLink:StackLink){
    stackLink = await this.http.post<StackLink>(`http://34.122.220.146:8080/stackLinks`, stackLink, this.httpOptions).toPromise();
    return stackLink;
  }

  async updateStackLink(stackLink:StackLink){
    stackLink = await this.http.put<StackLink>(`http://34.122.220.146:8080/stackLinks`, stackLink, this.httpOptions).toPromise();
    return stackLink;
  }

  async removeStackLink(stackLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/stackLinks/${stackLinkId}`, this.httpOptions).toPromise();
    return result;
  }
}
