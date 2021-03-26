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

  cardIds:Number[] = []
  
  @Input() stackId:string = "";

  @Input() mode:string = "view";
  constructor(private cardLinkService:CardLinkService) {
   }

  ngOnInit(): void {
    this.initCardIds();
  }

  async initCardIds(){
    const stackIdNum:number = Number(this.stackId);
    console.log(stackIdNum);
    const cardLinks:CardLink[] = await this.cardLinkService.getCardLinksByStackId(stackIdNum);
    for (const link of cardLinks){
      this.cardIds.push(link.cardId);
    }
    console.log(this.cardIds);
  }


}
