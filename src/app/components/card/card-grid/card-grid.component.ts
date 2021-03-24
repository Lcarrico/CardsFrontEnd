import { Component, Input, OnInit } from '@angular/core';
import { CardLink } from 'src/app/models/cardLink';
import { CardLinkService } from 'src/app/services/cardLink/card-link.service';
import { StackLinkService } from 'src/app/services/stackLink/stack-link.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {

  cardIds:Number[] = [1,2,5,6,7,8,9]
  
  @Input() stackId:string = "1";

  @Input() mode:string = "edit";
  constructor(private cardLinkService:CardLinkService) {
   }

  ngOnInit(): void {
    this.initCardIds();
  }

  async initCardIds(){
    const stackIdNum:number = Number(this.stackId);
    const cardLinks:CardLink[] = await this.cardLinkService.getCardLinksByStackId(stackIdNum);
    let cardIdsTemp:number[] = [];
    for (const cardLinkTemp of cardLinks){
      cardIdsTemp.push(cardLinkTemp.cardId);
    }
    this.cardIds = cardIdsTemp;
  }

}
