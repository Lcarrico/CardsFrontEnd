import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { Stack } from '../../models/stack';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor(private http:HttpClient) { }

  // CRUD Operations
  async createStack(stack:Stack):Promise<Stack>{
    stack = await this.http.post<Stack>("http://34.122.220.146:8080/stacks",stack).toPromise()
    return stack;
  }

  async getAllStacks():Promise<Stack[]>{
    const stacks:Stack[] = await this.http.get<Stack[]>(`http://34.122.220.146:8080/stacks`).toPromise();
    return stacks;
  }

  async getStackById(stackId:number):Promise<Stack>{
    const stack:Stack = await this.http.get<Stack>(`http://34.122.220.146:8080/stacks/${stackId}`).toPromise();
    return stack;
  }

  async updateStack(stack:Stack):Promise<Stack>{
    const updatedStack:Stack = await this.http.put<Stack>(`http://34.122.220.146:8080/stacks/${stack.stackId}`,stack).toPromise();
    return stack;
  }

  async deleteStack(stackId:number):Promise<Object>{
    const result = await this.http.delete(`http://34.122.220.146:8080/stacks/${stackId}`).toPromise();
    return result;
  }

  // // Services for Cards in Stacks
  // async getAllCardsFromStack(stackId:number){
  //   const stack:Stack = await this.getStackById(stackId);
  //   return stack.cards;
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
