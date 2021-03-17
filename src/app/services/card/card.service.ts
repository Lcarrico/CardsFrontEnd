import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../models/card';
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private http:HttpClient) { }

  async createCard(card:Card){
    card = await this.http.post<Card>(`http://34.122.220.146:8080/cards`,card).toPromise();
    return card;
  }

  async getCardById(id:number){
    const cards:Card[] = await this.http.get<Card[]>(`http://34.122.220.146:8080/cards/${id}`).toPromise();
    return cards;
  }

  async getAllCards(){
    const cards:Card[] = await this.http.get<Card[]>(`http://34.122.220.146:8080/cards`).toPromise();
    return cards;
  }

  async updateCard(card:Card){
    card = await this.http.put<Card>(`http://34.122.220.146:8080/cards`,card).toPromise();
    return card;
  }

  async deleteCard(card:Card){
    return await this.http.delete(`http://34.122.220.146:8080/cards/${card.cardId}`).toPromise();
  }
}
