import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { CardLink } from 'src/app/models/cardLink';
import { Stack } from 'src/app/models/stack';
import { CardLinkService } from 'src/app/services/cardLink/card-link.service';
import { StackService } from 'src/app/services/stack/stack.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  stack:Stack = new Stack(0,"","")
  cards:Card[] = [];
  cardLinks:CardLink[]=[];
  studying:boolean=false;
  stackId:number = 0

  constructor(
    private cardLinkService:CardLinkService,
    private stackService:StackService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.stackId = Number(this.route.snapshot.paramMap.get("stackId"));

    // console.log(id);
    // this.getStack(id);
    console.log(this.stack);
  }

  async startStudying(){
    this.studying=true;
    this.cardLinks = await this.cardLinkService.getCardLinksByStackId(this.stack.stackId);
  }

  async getStack(stackId:number){
    this.stack = await this.stackService.getStackById(stackId);
  }

}
