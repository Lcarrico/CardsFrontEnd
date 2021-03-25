import { Component, Input, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  showingTitle = "Question";
  showingContent = "What is 1+1?";
  card:Card = new Card(0, "What is 1+1", "2");

  @Input() cardId: string = "0";

  flipped = false;
  flipping = false;
  
  constructor(private cardService:CardService) { 
    
  }

  async setCard(){
    const cardIdNum:number = Number(this.cardId)
    if (cardIdNum != 0)
      this.card = await this.cardService.getCardById(cardIdNum);
    this.refresh();
  }

  refresh(){
    if (this.showingTitle == "Question"){
      this.showingContent = this.card.question;
    } else if (this.showingTitle == "Answer") {
      this.showingContent = this.card.answer;
    }
  }

  ngOnInit(): void {
    this.setCard();
    this.showingContent = this.card.question;
  }

  toggleDisplay(){
    if (this.showingTitle == "Question"){
      this.showingTitle = "Answer";
      this.showingContent = this.card.answer;
    } else if (this.showingTitle == "Answer"){
      this.showingTitle = "Question";
      this.showingContent = this.card.question;
    }
    setTimeout(() => this.flipping = false,700);
  }

  flipCard(){
    if (!this.flipping){
      this.flipping = true;
      this.flipped = !this.flipped;
      setTimeout(() => this.toggleDisplay(),300);
    }

  }

}
