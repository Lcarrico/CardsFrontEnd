import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../../models/card';
import { Tag } from '../../models/tag';
import { JwtService } from '../jwt/jwt.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  jwt:string = this.jwtService.getJwtFromCookie()

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };

  async createCard(card:Card){
    card = await this.http.post<Card>(`http://34.122.220.146:8080/cards`,card,this.httpOptions).toPromise();
    return card;
  }

  async getCardById(id:number){
    const card:Card = await this.http.get<Card>(`http://34.122.220.146:8080/cards/${id}`,this.httpOptions).toPromise();
    return card;
  }

  async getAllCards(){
    const cards:Card[] = await this.http.get<Card[]>(`http://34.122.220.146:8080/cards`,this.httpOptions).toPromise();
    return cards;
  }

  async updateCard(card:Card){
    card = await this.http.put<Card>(`http://34.122.220.146:8080/cards`,card,this.httpOptions).toPromise();
    return card;
  }

  async removeCard(card:Card){
    return await this.http.delete(`http://34.122.220.146:8080/cards/${card.cardId}`,this.httpOptions).toPromise();
  }
}
