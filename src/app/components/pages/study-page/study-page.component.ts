import { ComponentFactoryResolver, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardLink } from 'src/app/models/cardLink';
import { Stack } from 'src/app/models/stack';
import { CardLinkService } from 'src/app/services/cardLink/card-link.service';
import { StackService } from 'src/app/services/stack/stack.service';

@Component({
  selector: 'app-study-page',
  templateUrl: './study-page.component.html',
  styleUrls: ['./study-page.component.css']
})
export class StudyPageComponent implements OnInit {

  stack:Stack = new Stack(0,"","");
  cards:Card[] = [];
  cardLinks:CardLink[]=[];
  studying:boolean=false;

  constructor(
    private cardLinkService:CardLinkService,
    private stackService:StackService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.stack.stackId = Number(this.route.snapshot.paramMap.get("stackId"));
    console.log(this.stack.stackId);
    this.getStack(this.stack.stackId);
  }

  async startStudying(){
    this.studying=true;
    this.cardLinks = await this.cardLinkService.getCardLinksByStackId(this.stack.stackId);
  }

  async getStack(stackId:number){
    this.stack = await this.stackService.getStackById(stackId);
  }
}
