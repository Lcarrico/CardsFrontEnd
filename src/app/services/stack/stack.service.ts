import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardLink } from 'src/app/models/cardLink';
import { Card } from '../../models/card';
import { Stack } from '../../models/stack';
import { CardService } from '../card/card.service';
import { CardLinkService } from '../cardLink/card-link.service';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  jwt:string = this.jwtService.getJwtFromCookie()

  constructor(
    private http:HttpClient,
    private jwtService:JwtService,
    private cardLinkService:CardLinkService,
    private cardService:CardService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };


// CRUD Operations
async createStack(stack:Stack):Promise<Stack>{
  stack = await this.http.post<Stack>("https://34.122.220.146:8080/stacks",stack,this.httpOptions).toPromise()
  return stack;
}

async getAllStacks():Promise<Stack[]>{
  const stacks:Stack[] = await this.http.get<Stack[]>(`https://34.122.220.146:8080/stacks`,this.httpOptions).toPromise();
  return stacks;
}

async getStackById(stackId:number):Promise<Stack>{
  const stack:Stack = await this.http.get<Stack>(`https://34.122.220.146:8080/stacks/${stackId}`,this.httpOptions).toPromise();
  return stack;
}

async updateStack(stack:Stack):Promise<Stack>{
  const updatedStack:Stack = await this.http.put<Stack>(`https://34.122.220.146:8080/stacks/${stack.stackId}`,stack,this.httpOptions).toPromise();
  return stack;
}

async deleteStack(stackId:number):Promise<Object>{
  const result = await this.http.delete(`https://34.122.220.146:8080/stacks/${stackId}`,this.httpOptions).toPromise();
  return result;
}


    
  // // CRUD Operations
  // async createStack(stack:Stack):Promise<Stack>{
  //   stack = await this.http.post<Stack>("http://34.122.220.146:8080/stacks",stack,this.httpOptions).toPromise()
  //   return stack;
  // }

  // async getAllStacks():Promise<Stack[]>{
  //   const stacks:Stack[] = await this.http.get<Stack[]>(`http://34.122.220.146:8080/stacks`,this.httpOptions).toPromise();
  //   return stacks;
  // }

  // async getStackById(stackId:number):Promise<Stack>{
  //   const stack:Stack = await this.http.get<Stack>(`http://34.122.220.146:8080/stacks/${stackId}`,this.httpOptions).toPromise();
  //   return stack;
  // }

  // async updateStack(stack:Stack):Promise<Stack>{
  //   const updatedStack:Stack = await this.http.put<Stack>(`http://34.122.220.146:8080/stacks/${stack.stackId}`,stack,this.httpOptions).toPromise();
  //   return stack;
  // }

  // async deleteStack(stackId:number):Promise<Object>{
  //   const result = await this.http.delete(`http://34.122.220.146:8080/stacks/${stackId}`,this.httpOptions).toPromise();
  //   return result;
  // }

  // // Services for Cards in Stacks
  // async getAllCardsFromStack(stackId:number){
  //   const stack:Stack = await this.getStackById(stackId);
  //   const cardLinks:CardLink[] = await this.cardLinkService.getCardLinksByStackId(stackId);
  //   const cards:Card[]=[];
  //   cardLinks.forEach(async (link)=>{cards.push(await this.cardService.getCardById(link.cardId))})
  //   return cards;
  // }

  // async getCardByIdFromStack(stackId:number,cardId:number){
  //   const stack:Stack = await this.getStackById(stackId);
  //   const cards:Card[] = stack.cards;
  //   const resultCard = cards.find(card => card.cardId === cardId);
  //   return resultCard;
  // }

  // async addCardToStack(stack:Stack,card:Card):Promise<Stack>{
  //   stack.cards.push(card);
  //   const updatedStack:Stack = await this.updateStack(stack);
  //   return updatedStack;
  // }

  // async removeCardFromStack(stack:Stack,card:Card):Promise<Stack>{
  //   const cardIndex = stack.cards.map(function(card) {return card.cardId;}).indexOf(card.cardId);
  //   stack.cards.splice(cardIndex,1);
  //   const updatedStack:Stack = await this.http.put<Stack>(`http://34.122.220.146:8080/stacks/${stack.stackId}`,stack).toPromise();
  //   return updatedStack;
  // }

  
}
