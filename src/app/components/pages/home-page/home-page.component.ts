import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Stack } from 'src/app/models/stack';
import { CardService } from 'src/app/services/card/card.service';
import { StackService } from 'src/app/services/stack/stack.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  myCards:Card[] = [];
  myStacks:Stack[] = [];

  constructor(
    private cardService:CardService,
    private stackService:StackService  
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  async getCards(){
    this.myCards = await this.cardService.getAllCards();
  }

  async getStacks(){
    this.myStacks = await this.stackService.getAllStacks();
  }

}
