import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardLink } from 'src/app/models/cardLink';

@Injectable({
  providedIn: 'root'
})
export class CardLinkService {

  constructor(private http:HttpClient) {}

  async getAllCardLinks(){
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`http://34.122.220.146:8080/cardLinks`).toPromise();
    return cardLinks;
  }

  async getCardLinkById(cardLinkId:number){
    const cardLink:CardLink = await this.http.get<CardLink>(`http://34.122.220.146:8080/cardLinks/${cardLinkId}`).toPromise();
    return cardLink;
  }

  async getCardLinksByCardId(cardId:number){
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`http://34.122.220.146:8080/cardLinks?cardId=${cardId}`).toPromise();
    return cardLinks;
  }

  async getCardLinksByStackId(stackId:number){
    const cardLinks:CardLink[] = await this.http.get<CardLink[]>(`http://34.122.220.146:8080/cardLinks?stackId=${stackId}`).toPromise();
    return cardLinks;
  }

  async createCardLink(cardLink:CardLink){
    cardLink = await this.http.post<CardLink>(`http://34.122.220.146:8080/cardLinks`, cardLink).toPromise();
    return cardLink;
  }

  async updateCardLink(cardLink:CardLink){
    cardLink = await this.http.put<CardLink>(`http://34.122.220.146:8080/cardLinks`, cardLink).toPromise();
    return cardLink;
  }

  async removeCardLink(cardLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/cardLinks/${cardLinkId}`).toPromise();
    return result;
  }
}
