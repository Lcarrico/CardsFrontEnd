import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardLink } from 'src/app/models/cardLink';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class CardLinkService {

  jwt:string = this.jwtService.getJwtFromCookie()
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };
  
  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  async getAllCardLinks(){
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`https://34.122.220.146:8080/cardLinks`,this.httpOptions).toPromise();
    return cardLinks;
  }

  async getCardLinkById(cardLinkId:number){
    const cardLink:CardLink = await this.http.get<CardLink>(`https://34.122.220.146:8080/cardLinks/${cardLinkId}`,this.httpOptions).toPromise();
    return cardLink;
  }

  async getCardLinksByCardId(cardId:number){
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`https://34.122.220.146:8080/cardLinks?cardId=${cardId}`,this.httpOptions).toPromise();
    return cardLinks;
  }

  async getCardLinksByStackId(stackId:number):Promise<CardLink[]>{
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`https://34.122.220.146:8080/cardLinks?stackId=${stackId}`,this.httpOptions).toPromise();
    return cardLinks;
  }

  async createCardLink(cardLink:CardLink){
    cardLink = await this.http.post<CardLink>(`https://34.122.220.146:8080/cardLinks`, cardLink,this.httpOptions).toPromise();
    return cardLink;
  }

  async updateCardLink(cardLink:CardLink){
    cardLink = await this.http.put<CardLink>(`https://34.122.220.146:8080/cardLinks`, cardLink,this.httpOptions).toPromise();
    return cardLink;
  }

  async removeCardLink(cardLinkId:number){
    const result = await this.http.delete(`https:///34.122.220.146:8080/cardLinks/${cardLinkId}`,this.httpOptions).toPromise();
    return result;
  }
}
