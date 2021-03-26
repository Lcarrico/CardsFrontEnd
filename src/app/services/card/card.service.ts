import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../../models/card';
import { Tag } from '../../models/tag';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  jwt:string = this.jwtService.getJwtFromCookie()

  details = {
    headers: new HttpHeaders({
      "Authorization": this.jwt,
  })};

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  async createCard(card:Card){
    card = await this.http.post<Card>(`http://34.122.220.146:8080/cards`, card, this.details).toPromise();
    return card;
  }

  async getCardById(id:number){
    
    const card:Card = await this.http.get<Card>(`http://34.122.220.146:8080/cards/${id}`).toPromise();
    return card;
  }

  async getAllCards(){
    const details = {
      headers:{
          "Authorization": this.jwt
      }
    }
    const cards:Card[] = await this.http.get<Card[]>(`http://34.122.220.146:8080/cards`,details).toPromise();
    return cards;
  }

  async updateCard(card:Card){
    card = await this.http.put<Card>(`http://34.122.220.146:8080/cards/${card.cardId}`,card, this.details).toPromise();
    return card;
  }

  async removeCard(card:Card){
    return await this.http.delete(`http://34.122.220.146:8080/cards/${card.cardId}`).toPromise();
  }
}
