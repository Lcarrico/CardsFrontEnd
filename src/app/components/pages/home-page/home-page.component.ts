import { ɵparseCookieValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { CardLink } from 'src/app/models/cardLink';
import { Stack } from 'src/app/models/stack';
import { StackLink } from 'src/app/models/stackLink';
import { Tag } from 'src/app/models/tag';
import { CardService } from 'src/app/services/card/card.service';
import { CardLinkService } from 'src/app/services/cardLink/card-link.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { StackService } from 'src/app/services/stack/stack.service';
import { StackLinkService } from 'src/app/services/stackLink/stack-link.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userId:number=0;
  username:string="";

  myCards:Card[] = [];
  myStacks:Stack[] = [];
  stackLinks:StackLink[] = [];
  cardLinks:CardLink[] = [];

  constructor(
    private cardService:CardService,
    private stackService:StackService,
    private jwtService:JwtService,
    private stackLinkService:StackLinkService,
    private cardLinkService:CardLinkService,

  ) { }

  ngOnInit(): void {
    this.userId = this.jwtService.getUserId();
    this.username = this.jwtService.getUsername();
    this.getStacks();
    this.getCards();
  }

  async getStacks(){
    this.stackLinks = await this.stackLinkService.getStackLinksByLearnerId(this.userId);
    this.stackLinks.forEach(async (link:StackLink) => {
      this.myStacks.push(await this.stackService.getStackById(link.stackId));
    })
    console.log(this.myStacks)
  }

  getCards(){
    this.stackLinks.forEach(async (stackLink:StackLink)=>{
      console.log(stackLink)
      this.cardLinks = await this.cardLinkService.getCardLinksByStackId(stackLink.stackId);
      this.cardLinks.forEach(async (cardLink:CardLink)=>{
        console.log(cardLink)
        this.myCards.push(await this.cardService.getCardById(cardLink.cardId));
      })
    })  
  }
}
